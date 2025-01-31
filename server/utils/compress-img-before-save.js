import sharp from "sharp";
import fs from "fs";
import path from "path";

const compressImage = async (filePath) => {
  try {
    const ext = path.extname(filePath).toLowerCase(); // Извличане на разширението
    const compressedPath = filePath.replace(/(\.\w+)$/, "-compressed$1");

    let formatOptions = {};

    if (ext === ".png") {
      formatOptions = { quality: 80, compressionLevel: 8 };
    } else {
      formatOptions = { quality: 80 };
    }

    await sharp(filePath)
      .resize(800) // Промяна на размера
      .toFormat(ext === ".png" ? "png" : "jpeg", formatOptions) // Запазване на оригиналния формат
      .toFile(compressedPath);

    fs.unlinkSync(filePath); // Изтриване на оригиналния файл
    fs.renameSync(compressedPath, filePath); // Преименуване на компресираното изображение

    console.log(`Compressed image saved: ${filePath}`);
  } catch (error) {
    console.error("Sharp error:", error);
  }
};

export default compressImage;
