# Design Document: Multilingual Articles (BG/EN)

## Overview

This document describes the technical design for adding Bulgarian/English language support to the Upload Article platform. The approach uses translation columns on existing tables (minimal schema change), a `lang` query parameter on the articles API, and an `activeLanguage` Redux slice on the frontend.

---

## Architecture

```
[User clicks BG/EN toggle]
         |
  languageSlice (Redux)
  activeLanguage: 'bg' | 'en'
  persisted to localStorage
         |
  getArticlesDataSlice
  GET /api/articles?lang={activeLanguage}
         |
  Express: GET /api/articles
  - validates lang param
  - maps DB rows: title = title (bg) OR title_en || title (en)
  - returns unified Article[] shape (same as today)
         |
  PostgreSQL
  articles: id, title, title_en, status, main_image_url, created_at
  sections: id, article_id, title, title_en, content, content_en, position, image_url
```

Admin write path:

```
[Create/Edit form]
  BG title + EN title
  BG section title + EN section title
  BG content + EN content
         |
  Redux thunks (addNewArticleSlice, uploadArticleSlice, editSectionsSlice)
         |
  POST /api/create/articles/header  { title, title_en, status }
  POST /api/create/section           FormData { title, title_en, content, content_en, ... }
  POST /api/edit/article/:id         { title, title_en, section[{title, title_en, content, content_en}] }
```

---

## Components and Interfaces

### LanguageToggle (new component)

```jsx
// src/components/LanguageToggle/LanguageToggle.jsx
// Props: none — reads/writes Redux activeLanguage
function LanguageToggle() {
  const activeLanguage = useSelector((state) => state.language.activeLanguage);
  const dispatch = useDispatch();
  return (
    <div className="language-toggle">
      <button
        className={activeLanguage === "bg" ? "active" : ""}
        onClick={() => dispatch(setLanguage("bg"))}
      >
        BG
      </button>
      <button
        className={activeLanguage === "en" ? "active" : ""}
        onClick={() => dispatch(setLanguage("en"))}
      >
        EN
      </button>
    </div>
  );
}
```

### languageSlice (new Redux slice)

```js
// src/store/language/languageSlice.js
const initialState = {
  activeLanguage: localStorage.getItem("activeLanguage") || "bg",
};

// Actions:
// setLanguage(lang: 'bg' | 'en') → sets activeLanguage, persists to localStorage
```

### API shape changes

**GET /api/articles?lang=bg|en** — response shape unchanged (same fields as today):

```json
[
  {
    "id": 1,
    "title": "...", // BG or EN value depending on lang param + fallback
    "status": true,
    "mainImage": "...",
    "createdAt": "...",
    "sections": [
      {
        "position": 1,
        "title": "...", // BG or EN + fallback
        "content": "...", // BG or EN + fallback
        "imageUrl": "..."
      }
    ]
  }
]
```

**POST /api/create/articles/header** — request body:

```json
{ "title": "BG title", "title_en": "EN title (optional)", "status": false }
```

**POST /api/create/section** — FormData additions:

```
title_en   (optional string)
content_en (optional string)
```

**POST /api/edit/article/:id** — section object additions:

```json
{ "title": "...", "title_en": "...", "content": "...", "content_en": "...", ... }
```

---

## Data Models

### Database migrations

```sql
-- articles table: add EN title column
ALTER TABLE articles ADD COLUMN title_en VARCHAR(255);

-- sections table: add EN title and content columns
ALTER TABLE sections ADD COLUMN title_en VARCHAR(255);
ALTER TABLE sections ADD COLUMN content_en TEXT;
```

No new tables required. Existing BG content remains in the original columns.

### Language mapping logic (backend)

```js
// Applied in GET /api/articles route
function mapLang(bgValue, enValue, lang) {
  if (lang === "en") {
    return enValue && enValue.trim() !== "" ? enValue : bgValue;
  }
  return bgValue;
}
```

---

## Correctness Properties

**Property 1: Fallback Always Returns Content**
For any article or section where `title_en` (or `content_en`) is null or empty string, WHEN the API is called with `lang=en`, THE system SHALL return the BG value in the corresponding response field.
**Validates: Requirements 5.1, 5.2, 5.3**

**Property 2: Language Param Only Affects Text Fields**
For any request with `lang=bg` or `lang=en`, THE system SHALL return identical values for `id`, `status`, `mainImage`, `createdAt`, `position`, and `imageUrl` regardless of the lang value.
**Validates: Requirements 4.1, 4.2**

**Property 3: Language Persists Across Page Loads**
For any `activeLanguage` value set by the user, WHEN the page is reloaded, THE system SHALL restore the same `activeLanguage` from localStorage.
**Validates: Requirements 1.4, 1.5**

**Property 4: Invalid Lang Rejected**
For any `lang` value that is not `'bg'` or `'en'`, THE system SHALL respond with HTTP 400 and SHALL NOT return any article data.
**Validates: Requirements 4.4**

---

## Error Handling

| Scenario                         | Handling                                                        |
| -------------------------------- | --------------------------------------------------------------- |
| `lang` param not `bg` or `en`    | 400 Bad Request: `{ error: "Invalid lang. Use 'bg' or 'en'." }` |
| EN title/content empty on submit | Accept null — stored as NULL in DB, fallback applies on read    |
| localStorage unavailable         | Default to `'bg'`, no crash                                     |
| Article has no sections          | Return empty sections array (unchanged from current behavior)   |

---

## Testing Strategy

Testing uses Node.js built-in `assert` or Jest (already available for the project). No external property-testing library is installed; correctness properties are validated with targeted parameterized unit tests.

**Unit tests** (`server/routes/like_articles_by_id/articles.test.js`):

- Test `mapLang()` helper with all combinations: `lang=bg`, `lang=en` with filled EN, `lang=en` with null EN, `lang=en` with empty string EN.
- Test route handler: valid `lang=bg`, valid `lang=en`, missing lang (defaults to bg), invalid lang (400).

**Frontend unit tests** (`src/store/language/languageSlice.test.js`):

- Test `setLanguage` action updates state correctly.
- Test initial state defaults to `'bg'` when localStorage is empty.
- Test initial state loads from localStorage when set.

**Manual E2E verification** (visible increment):

1. Navigate to Home page — language toggle visible.
2. Create article with BG title "Тест" and EN title "Test".
3. Switch toggle to EN — article list shows "Test".
4. Switch toggle to BG — article list shows "Тест".
5. Create section with only BG content, switch to EN — BG content shown as fallback.
6. Reload page — toggle stays on the previously selected language.

**Sample test snippet:**

```js
// Validates Property 1: Fallback Always Returns Content
describe("mapLang", () => {
  it("returns EN value when EN is present (Property 1)", () => {
    expect(mapLang("Тест", "Test", "en")).toBe("Test");
  });
  it("falls back to BG when EN is null (Property 1)", () => {
    expect(mapLang("Тест", null, "en")).toBe("Тест");
  });
  it("falls back to BG when EN is empty string (Property 1)", () => {
    expect(mapLang("Тест", "", "en")).toBe("Тест");
  });
  it("returns BG value for lang=bg regardless of EN (Property 2)", () => {
    expect(mapLang("Тест", "Test", "bg")).toBe("Тест");
  });
});
```
