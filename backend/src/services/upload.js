const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "public/assets/images");
  },
  filename(req, file, callback) {
    const arrayFile = file.originalname.split(".");
    const extension = arrayFile.pop();
    callback(null, `${arrayFile[0]}_${Date.now()}.${extension}`);
  },
});

const fileFilter = (req, file, callback) => {
  const allowedExtensions = [".pdf"];
  const fileExtension = path.extname(file.originalname).toLowerCase();
  if (allowedExtensions.includes(fileExtension)) {
    callback(null, true);
  } else {
    callback(new Error("Seuls les fichiers PDF sont autorisés."), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;
