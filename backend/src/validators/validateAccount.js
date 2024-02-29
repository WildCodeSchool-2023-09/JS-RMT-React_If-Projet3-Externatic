const Joi = require("joi");

const schema = Joi.object({
  email: Joi.string().email().required(),
  lastname: Joi.string().allow(""),
  firstname: Joi.string().allow(""),
  status: Joi.string().allow(null),
  phone_number: Joi.number()
    .max(10 ** 10 - 1)
    .allow(null),
  city: Joi.string().allow(null),
  employment_type: Joi.string().allow(null),

  experience: Joi.string().allow(null),
  diploma: Joi.string().allow(null),
  url: Joi.string().allow(null),
}).options({ stripUnknown: true });

const validateAccount = (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(422).json(error);
  } else {
    next();
  }
};

module.exports = validateAccount;
