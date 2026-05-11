# Requirements Document

## Introduction

This feature adds Bulgarian (BG) and English (EN) language support to articles and their sections. Admins can author content in both languages; visitors and users can toggle the active language to read articles in their preferred language.

## Glossary

- **Active Language**: The currently selected display language (`bg` or `en`), stored in frontend state and persisted to localStorage.
- **BG Version**: The Bulgarian content for a field (stored in the existing `title`/`content` columns).
- **EN Version**: The English content for a field (stored in the new `title_en`/`content_en` columns).
- **Language Fallback**: When the EN version of a field is null or empty, the BG version is returned instead.
- **Language Toggle**: A UI control that switches the active language between BG and EN.
- **Translation Columns**: The additional `_en`-suffixed database columns added to articles and sections.

---

## Requirements

### Requirement 1: Language Toggle

User Story: As a visitor or logged-in user, I want to switch between Bulgarian and English in the UI, so that I can read articles in my preferred language.

#### Acceptance Criteria

1. WHEN a language toggle control is visible in the main navigation or header, THE system SHALL display two options: "BG" and "EN".
2. WHEN the user clicks a language option, THE system SHALL update the active language immediately.
3. WHEN the active language changes, THE system SHALL re-render all displayed article content in the selected language.
4. WHEN the user reloads the page, THE system SHALL restore the previously selected language from localStorage.
5. GIVEN no language has been previously selected, WHEN the page loads, THE system SHALL default to "bg".

---

### Requirement 2: Article Title in Two Languages

User Story: As an admin, I want to enter an article title in both Bulgarian and English, so that the article is accessible to readers of both languages.

#### Acceptance Criteria

1. WHEN an admin creates a new article, THE system SHALL provide a BG title field and an optional EN title field.
2. WHEN an admin submits the create article form, THE system SHALL save the BG title and EN title (or null if left empty) to the database.
3. WHEN an admin edits an existing article, THE system SHALL display the current BG title and the current EN title (if any) in their respective fields.
4. WHEN an admin submits the edit article form, THE system SHALL update both the BG and EN title fields.

---

### Requirement 3: Section Content in Two Languages

User Story: As an admin, I want to enter section titles and content in both Bulgarian and English, so that each section of an article is fully translated.

#### Acceptance Criteria

1. WHEN an admin creates a new section, THE system SHALL provide a BG title field, an optional EN title field, a BG content field, and an optional EN content field.
2. WHEN an admin submits the create section form, THE system SHALL save all four fields (with null for any empty EN field).
3. WHEN an admin edits an existing section, THE system SHALL display all four current values in their respective fields.
4. WHEN an admin submits the edit section form, THE system SHALL update all four fields.

---

### Requirement 4: Language-Aware API

User Story: As a frontend client, I want to request articles in a specific language, so that I only need to process content in the active language.

#### Acceptance Criteria

1. WHEN a GET request is sent to `/api/articles?lang=bg`, THE system SHALL return articles with title and sections mapped to BG fields.
2. WHEN a GET request is sent to `/api/articles?lang=en`, THE system SHALL return articles with title and sections mapped to EN fields (with BG fallback where EN is null or empty).
3. WHEN a GET request is sent to `/api/articles` without a `lang` parameter, THE system SHALL default to `bg`.
4. WHEN a `lang` parameter value is not `bg` or `en`, THE system SHALL respond with HTTP 400.

---

### Requirement 5: Language Fallback

User Story: As a visitor reading in English, I want to see the Bulgarian content for any field that has no English translation, so that I always see some content rather than a blank.

#### Acceptance Criteria

1. WHEN `lang=en` is requested and an article's `title_en` is null or empty, THE system SHALL return the BG `title` value in the `title` response field.
2. WHEN `lang=en` is requested and a section's `title_en` is null or empty, THE system SHALL return the BG `title` value in the section's `title` response field.
3. WHEN `lang=en` is requested and a section's `content_en` is null or empty, THE system SHALL return the BG `content` value in the section's `content` response field.

---

### Requirement 6: Edit Existing Articles with Language Support

User Story: As an admin editing a legacy article (created before multilingual support), I want to add EN translations without losing the existing BG content, so that old articles can be gradually translated.

#### Acceptance Criteria

1. WHEN an admin opens an existing article for editing that has no EN content, THE system SHALL show empty EN fields alongside the existing BG content.
2. WHEN an admin saves an existing article with newly entered EN content, THE system SHALL update the EN columns without modifying the BG columns.
3. WHEN an admin saves an existing article leaving EN fields empty, THE system SHALL set the EN columns to null without modifying the BG columns.
