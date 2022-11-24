const db = require("../config");
const bcrypt = require("bcryptjs");
const pick = require("lodash/pick");
const { isEmpty } = require("lodash");
const jwt = require("jsonwebtoken");
const {
  bankDetailsValidation,
  companySignUp,
  managementValidation,
  signInValidation,
} = require("../validation");

const multer = require("multer");

const signToken = (vendor) => {
  return jwt.sign(
    {
      id: vendor.id,
      name: vendor.name,
      email: vendor.email,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "30d",
    }
  );
};

// Create multer object
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },

  //  file extensions
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});
//const upload= multer({ storage: storage,  limits : {fileSize : 1000000} })

module.exports = {
  companyLoginHandler: async (req, res) => {
    const { error } = signInValidation(req.body);
    if (error)
      return res
        .status(400)
        .send({ errored: true, error: error.details[0].message });

    const { email, password } = req.body;

    const results = await db.search("kmover.usercompany", { email });
    //console.log(results);

    if (isEmpty(results))
      return res
        .status(400)
        .json({ errored: true, error: "Account does not exist!!" });

    const validPassword = bcrypt.compareSync(password, results.passwordhash);

    if (!validPassword)
      return res.status(400).json({ errored: true, error: "Wrong Password!" });

    const response = pick(results, ["id", "email", "roleid"]);
    //console.log(response);

    const token = signToken(response);
    //send token as json
    //instance of token
    res.status(200).json({ token: token });
    if (!token) res.status(400).json({ msg: "Invalid Token" });
  },
  addUserCompanyHandler: async (req, res) => {
    const { error } = companySignUp(req.body);
    if (error)
      return res
        .status(400)
        .send({ errored: true, error: error.details[0].message });
    const { username, email, password } = req.body;

    const hash = bcrypt.hashSync(password, 10);
    const roleid = 3;
    //console.log(hash);
    const newUser = {
      username: username,

      email: email,
      passwordhash: hash,
      roleid: roleid,
    };
    if (!isEmpty(newUser)) {
      const userCompany = await db.create("kmover.usercompany", newUser);
      res.status(201).json(userCompany);
    } else {
      res.status(409).json("All details are required");
    }
  },

  addBankDetailsHandler: async (req, res) => {
    const { error } = bankDetailsValidation(req.body);
    if (error)
      return res
        .status(400)
        .send({ errored: true, error: error.details[0].message });
    const { bankname, accountname, accountnumber, subbranch, swiftcode } =
      req.body;

    const newBankDetails = {
      bankname: bankname,
      accountname: accountname,
      accountnumber: accountnumber,
      subbranch: subbranch,
      swiftcode: swiftcode,
    };
    if (!isEmpty(newBankDetails)) {
      const bankDetails = await db.create("kmover.bankdetails", newBankDetails);
      res.status(201).json(bankDetails);
    } else {
      res.status(409).json("All details are required");
    }
  },

  addManagementDetailsHandler: async (req, res) => {
    const { error } = managementValidation(req.body);
    if (error)
      return res
        .status(400)
        .send({ errored: true, error: error.details[0].message });
    const {
      contactname,
      contactaddress,
      contactphonenumber,
      contactemail,
      swiftcode,
    } = req.body;

    const newContactDetails = {
      contactname: contactname,
      contactaddress: contactaddress,
      contactphonenumber: contactphonenumber,
      contactemail: contactemail,
      swiftcode: swiftcode,
    };
    if (!isEmpty(newContactDetails)) {
      const contactDetails = await db.create(
        "kmover.management",
        newContactDetails
      );
      res.status(201).json(contactDetails);
    } else {
      res.status(409).json("All details are required");
    }
  },
  addServiceHandler: async (req, res) => {
    const { title, description } = req.body;
    const service = {
      title: title,
      descrption: description,
    };
    if (!isEmpty(service)) {
      const services = await db.create("kmover.service", services);
      res.status(201).json(services);
    } else {
      res.status(409).json("All details are required");
    }
  },

  addCompanyHandler: async (req, res) => {
    //const certificate =req.body;
    const fileUpload = multer({
      storage: storage,
      limits: {
        fileSize: "5mb",
      },
    }).fields([
      {
        name: "certificate",
        maxCount: 1,
      },
      {
        name: "licence",
        maxCount: 1,
      },
    ]);

    fileUpload(req, res, (err) => {
      const { companyname, location, address, postalcode } = req.body;
      const certificateFile = req.files.certificate[0].path;
      const licenceFile = req.files.licence[0].path;
      const id = 1;
      const bank = 4;
      const user = 5;

      const newCompany = {
        companyname: companyname,
        location: location,
        address: address,
        postal_code: postalcode,
        certificate: certificateFile,
        licence: licenceFile,
        userid: user,
        managementid: id,
        bankdetailsid: bank,
      };
      if (!isEmpty(newCompany)) {
        const company = db.create("kmover.company", newCompany);
        res.status(201).json(company);
      } else {
        res.status(409).json("All details are required");
      }
      // if (err) {
      //  res.status(400).send("Something went wrong!");
      // }
      //res.json(newCompany);
      console.log(req.body);
      console.log(newCompany);
    });
  },
};
