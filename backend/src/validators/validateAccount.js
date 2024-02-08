const Joi = require("joi");

const schema = Joi.object({
  email: Joi.string().email().required(),
  lastname: Joi.string().allow(""),
  firstname: Joi.string().allow(""),
  status: Joi.string().allow(""),
  phone_number: Joi.number()
    .max(10 ** 10 - 1)
    .allow(null),
  city: Joi.string().allow(""),
  employment_type: Joi.string().allow(""),
  experience: Joi.string().allow(""),
  diploma: Joi.string().allow(""),
  url: Joi.string().allow(""),
});

const validateAccount = (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(422).json(error);
  } else {
    next();
  }
};

module.exports = validateAccount;
