CREATE TABLE article (
  images_id SERIAL PRIMARY KEY,
  header VARCHAR (50) UNIQUE NOT NULL,
  created_at TIMESTAMP NOT NULL,
  time TIMESTAMP,
  filename TEXT NOT NULL, -- Name of the image file
  data BYTEA NOT NULL    -- Binary data of the image
);