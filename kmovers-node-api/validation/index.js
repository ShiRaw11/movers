const { signInValidation } = require("./signInValidation");
const {managementValidation} = require("./managementValidation");
const { companyValidation } = require("./companyValidation"); 
const {signUpValidation} = require("./signUpValidation");
const {bankDetailsValidation}= require("./bankDetailsValidation");
const {companySignUp} = require("./companySignUp");


module.exports = {
  signInValidation,
signUpValidation,
companyValidation,
managementValidation,
  bankDetailsValidation,
  companySignUp

};