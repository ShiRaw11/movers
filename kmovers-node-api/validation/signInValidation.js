const Joi = require("joi");

function signInValidation(user) {
  const schema = Joi.object({
    email: Joi.string().email().required().messages({"string.email" :`Please enter a valid email address!!`}),
    password: Joi.string().min(8).required()
    .messages({"required":`Please Enter a password!`}),
  });

  return schema.validate(user);
}

module.exports = {
  signInValidation,
};
