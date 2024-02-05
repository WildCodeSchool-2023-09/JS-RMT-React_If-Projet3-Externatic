const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  city: Joi.string().required(),
  phone_number: Joi.string().length(10).required(),
  image_url: Joi.string().required(),
});

const validateCompany = (req, res, next) => {
  delete req.body.id;
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(422).json(error);
  } else {
    next();
  }
};

module.exports = validateCompany;
