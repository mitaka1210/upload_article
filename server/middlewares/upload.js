import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { extname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const storagePath = path.join(__dirname, "../", "upload");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, storagePath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + extname(file.originalname));
  },
});
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/;
  const fileExt = extname(file.originalname).toLowerCase(); // Смяна на променливото име
  const extValid = allowedTypes.test(fileExt);
  const mimetypeValid = allowedTypes.test(file.mimetype);

  if (extValid && mimetypeValid) {
    return cb(null, true);
  } else {
    cb(new Error("Only images are allowed"));
  }
};
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter,
});

export default upload;
