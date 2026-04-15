import sharp from "sharp";
import fs from "fs";
import path from "path";

const DEV_SYNC_PATH = "/Users/mitaka/projects/PersonalProjects/d-dimitrov/public/article_images";

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

    // Sync to d-dimitrov dev folder (only in development)
    if (process.env.NODE_ENV !== "production") {
      try {
        const filename = path.basename(filePath);
        const destPath = path.join(DEV_SYNC_PATH, filename);
        fs.copyFileSync(filePath, destPath);
        console.log(`Synced to dev folder: ${destPath}`);
      } catch (syncError) {
        console.error("Dev sync error (non-fatal):", syncError.message);
      }
    }
  } catch (error) {
    console.error("Sharp error:", error);
  }
};

export default compressImage;
