CREATE TABLE article
(
    images_id  SERIAL PRIMARY KEY,
    header     VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMP          NOT NULL,
    time       TIMESTAMP,
    filename   TEXT               NOT NULL, -- Name of the image file
    data       BYTEA              NOT NULL  -- Binary data of the image
);

CREATE TABLE articles
(
    id         SERIAL PRIMARY KEY,
    title      VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE sections
(
    id         SERIAL PRIMARY KEY,
    article_id INT          NOT NULL REFERENCES articles (id) ON DELETE CASCADE,
    title      VARCHAR(255) NOT NULL,
    content    TEXT,
    position   INT          NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE sections
    ADD COLUMN image_url VARCHAR(255);