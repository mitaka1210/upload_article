import express from "express";
import upload from "./upload.js";
import compressImage from "../utils/compress-img-before-save.js";

const app = express();
const port = process.env.PORT || 5000;

// Тази заявка обработва качването на изображение и го компресира преди да го запази. Ето какво прави всяка част от кода:
//  1. **Качване на изображение**: Използва `multer` middleware за обработка на качването на файл. Очаква се един файл с полето "image".
//  ```javascript
//    app.post("/upload", upload.single("image"), async (req, res) => {
// 2. **Компресиране на изображението**: Използва функцията `compressImage`, за да компресира каченото изображение.
//  ```javascript
//    try {
//      await compressImage(req.file.path);
// 3. **Успешен отговор**: Ако компресирането е успешно, връща JSON отговор с успех.
//  ```javascript
//      res.status(200).json({ message: "Image uploaded and compressed successfully" });
//    ```
//
// 4. **Грешка**: Ако възникне грешка, връща JSON отговор с грешка.
//  ```javascript
//    } catch (err) {
//      res.status(500).json({ error: "Error processing image" });
//    }
//    ```
//
// Този код създава POST заявка на `/upload`, която обработва качването и компресирането на изображения. Когато се изпълни успешно, връща съобщение за успех, а при грешка - съобщение за грешка.
// За да стартирате сървъра, използвайте `node server/index.js` и използвайте Postman или друг инструмент за изпращане на POST заявки към `/upload`.
app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    await compressImage(req.file.path);
    res
      .status(200)
      .json({ message: "Image uploaded and compressed successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error processing image" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
