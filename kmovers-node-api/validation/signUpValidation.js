const Joi = require("joi");

function signUpValidation(user) {
  const schema = Joi.object({
    firstname: Joi.string().min(3).max(50).required().messages({"required" :`Please enter a valid email address!!`}),
    lastname: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required().messages({"string.email" :`Please enter an email address!!`}),
    phonenumber: Joi.string()
      .regex(/^[0-9]{10}$/)
      .required(),
    password: Joi.string().min(8).required(),
    confirmpassword: Joi.string().required(),
  });

  return schema.validate(user);
}

module.exports = {
  signUpValidation,
};
