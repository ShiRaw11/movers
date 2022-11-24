const express = require("express");
const { tryCatch } = require("../helpers");
const { authMiddleware } = require("..//middlewares/auth");

const router = express.Router();

const {
  signInHandler,
  getUsers,
  signUpHandler,
  getMoverHandler,
  addMoverHandler,
  addCompanyHandler,
  addServiceHandler,
  addBankDetailsHandler,
  roleHandler,
  addUserCompanyHandler,
  addManagementDetailsHandler,
  companyLoginHandler
} = require("../controllers");
const { getRoles } = require("../controllers/authenticationHandlers");


router.get("/getuser", tryCatch(getUsers));
router.post("/addservice", tryCatch(addServiceHandler));
router.get("/getrole", tryCatch(getRoles));
router.post("/login", tryCatch(signInHandler));
router.post("/signup", tryCatch(signUpHandler));
router.post("/addmover", authMiddleware, tryCatch(addMoverHandler));
router.get("/getmover/:id", tryCatch(getMoverHandler));
router.post("/usercompany", tryCatch(addUserCompanyHandler));
router.post("/addcompany", tryCatch(addCompanyHandler));
router.post("/addrole", tryCatch(roleHandler));
router.post("/addmanagement", tryCatch(addManagementDetailsHandler));
router.post("/addbank", tryCatch(addBankDetailsHandler));
router.post("/companylogin", tryCatch(companyLoginHandler));
module.exports = router;
