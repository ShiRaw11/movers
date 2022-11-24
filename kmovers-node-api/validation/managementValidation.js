const Joi = require("joi");

function managementValidation(user) {
  const schema = Joi.object({
    contactname: Joi.string().min(3).max(50).required(),
    contactaddress: Joi.string().required(),
    contactemail: Joi.string().email().required(),
    contactphonenumber: Joi.string()
      .regex(/^[0-9]{10}$/)
      .required(),
  });

  return schema.validate(user);
}

module.exports = {
  managementValidation,
};
