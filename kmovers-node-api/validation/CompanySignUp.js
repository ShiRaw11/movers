
const Joi = require("joi");

function companySignUp(user) {
  const schema = Joi.object({
    username: Joi.string()
    .min(3)
    .max(50)
    .required(),

  email: Joi.string().email().required(),

  password: Joi.string().min(8).required(),
 
  });

  return schema.validate(user);
}

module.exports = {
  companySignUp,
};
