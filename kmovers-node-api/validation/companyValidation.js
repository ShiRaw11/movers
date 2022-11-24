const { object, string } = require("joi");

function companyValidation(user) {
  const schema = object({
    companyname: string().required(),
    location: string().min(8).required(),
    address: string().required(),
    postalcode: Joi.string()
    .regex(/^[0-9]{5}$/)
    .required(),
  
    fileUpload: {
      certificate: Joi.any().required(),
      licence: Joi.any().required(),
    },
  });

  return schema.validate(user);
}

module.exports = {
  companyValidation,
};
