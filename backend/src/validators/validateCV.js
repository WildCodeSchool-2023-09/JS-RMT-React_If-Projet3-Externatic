const Joi = require("joi");

const cvSchema = Joi.object({
  file: Joi.any().required(),
});

const validateCV = (req, res, next) => {
  const { error } = cvSchema.validate({ file: req.file });

  if (error) {
    res.status(422).json(error);
  } else {
    next();
  }
};

module.exports = validateCV;
