const multer = require("multer");

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

const upload = multer({
  storage,
});

module.exports = upload;
