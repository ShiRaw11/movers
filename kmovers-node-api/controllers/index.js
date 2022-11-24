const {
  signInHandler,
  signUpHandler,
  getUsers,
} = require("./authenticationHandlers");
const {
 companyLoginHandler,
  addCompanyHandler,
  addBankDetailsHandler,
  addServiceHandler,
  addUserCompanyHandler,
  addManagementDetailsHandler
} = require("./companyHandlers");
const { getMoverHandler,  } = require("./moverHandlers");
const { roleHandler } = require("./roleHandler");

module.exports = {
  signInHandler,
  signUpHandler,
  getUsers,
  addBankDetailsHandler,
  addServiceHandler,
  addUserCompanyHandler,
  addManagementDetailsHandler,
companyLoginHandler,
  addCompanyHandler,
  getMoverHandler,

  roleHandler,
};
