const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "public/assets/images");
  },
  filename(req, file, callback) {
    const arrayFile = file.originalname.split(".");
    const extension = arrayFile.pop();
    const sanitizedFilename = `${arrayFile[0].replace(
      /\s/g,
      "_"
    )}_${Date.now()}.${extension}`;
    callback(null, sanitizedFilename);
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
