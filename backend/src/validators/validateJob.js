// const Joi = require("joi");

// const schema = Joi.object({
//   id: Joi.number(),
//   company_id: Joi.number(),
//   consultant_id: Joi.number(),
//   title: Joi.string().required(),
//   description_mission: Joi.string().required(),
//   description_about_candidate: Joi.string().required(),
//   description_position: Joi.string().required(),
//   description_advantages: Joi.string().required(),
//   description_process: Joi.string().required(),
//   language: Joi.string(),
//   salary: Joi.string().required(),
//   location: Joi.string().required(),
//   working_type: Joi.string(),
//   starting_date: Joi.date().required(),
//   position_category: Joi.string().required(),
//   contract_type: Joi.string(),
//   position_requirements: Joi.string().required(),
//   created_at: Joi.date().timestamp(),
// });

// const validateJob = (req, res, next) => {
//   delete req.body.id;
//   const { error } = schema.validate(req.body);

//   if (error) {
//     res.status(422).json(error);
//   } else {
//     next();
//   }
// };

// module.exports = validateJob;
