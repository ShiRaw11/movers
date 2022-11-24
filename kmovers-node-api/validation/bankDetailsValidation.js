const Joi = require("joi");

function bankDetailsValidation(user) {
  const schema = Joi.object({
    accountname: Joi.string().min(3).max(50).required(),
    bankname: Joi.string().min(3).max(50).required(),
    accountnumber: Joi.string().required(),
    subbranch: Joi.string().min(3).max(50),
    swiftcode: Joi.string().min(8).required(),
  });

  return schema.validate(user);
}

module.exports = {
  bankDetailsValidation,
};
