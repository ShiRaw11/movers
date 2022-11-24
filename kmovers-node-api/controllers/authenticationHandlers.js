const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config");
const { signInValidation, signUpValidation } = require("../validation");
const pick = require("lodash/pick");
const { isEmpty } = require("lodash");

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

module.exports = {
  getUsers: async (req, res) => {
    const users = await db.getAll("kmover.user");

    return res.status(200).json(users);
  },
  getRoles: async (req, res) => {
    const roles = await db.getOne("kmover.role");

    return res.status(200).json(roles);
  },
  roleHandler: async (req, res) => {
    const newRole = req.body;
    if (!isEmpty(newRole)) {
      const role = await db.create("kmover.role", newRole);
      res
        .status(201)
        .json(role, { msg: "You have successfully created a new role" });
      //  console.log(role);
    } else
      return res.status(500).json({
        message: "role Creation Failed",
      });
  },
  signInHandler: async (req, res) => {
    const { error } = signInValidation(req.body);
    if (error)
      return res
        .status(400)
        .send({ errored: true, error: error.details[0].message });

    const { email, password } = req.body;

    const results = await db.search("kmover.user", { email });
    console.log(results);

    if (isEmpty(results))
    return res.status(400).json({ errored: true, error: "Account does not exist!!" });

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

    /* const token = jwt.sign({userId,email,roleid}, process.env.REFRESH_TOKEN_SECRET,{
      expiresIn: '1d'
  });
  await db.update({refresh_token: refreshToken},{
      where:{
          id: userId
      }
  });
  res.cookie('refreshToken', refreshToken,{
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000
  });
*/
  },

  signUpHandler: async (req, res) => {
    const { error } = signUpValidation(req.body);
    if (error)
      return res
        .status(400)
        .send({ errored: true, error: error.details[0].message });
    const {
      firstname,
      lastname,
      email,
      phonenumber,
      password,
      confirmpassword,
    } = req.body;

   const roleid = 2;
    const otp = "1234";
    // console.log(req.body);
    //const existingEmail = await db.getOne("kmover.user",  'email' );

    //if (existingEmail)  return res.status(400).json({ errored: true, error: "Email already exists!!" });
    //console.log(existingEmail)

    if (password !== confirmpassword)
      return res.status(400).json({ errored: true, error: "Password and confirm password do not match!!" });

    const hash = bcrypt.hashSync(password, 10);
    // console.log(hash);

    // console.log("Hash is", hashPassword)
    // added this

    const newUser = {
      roleid: roleid,
      firstname: firstname,
      lastname: lastname,
      phonenumber: phonenumber,
      email: email,
      passwordhash: hash,
      phoneverificationcode: otp,
      emailverificationcode: otp,
      passwordresettoken: otp,
    };
    if (!isEmpty(newUser)) {
      const response = await db.create("kmover.user", newUser);
      //console.log("db response", response);
      res.status(201).json({ msg: "You have successfully created an account" });
    }
  },
  /*logoutHandler : async(req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if(!refreshToken) return res.sendStatus(204);
  const user = await db.search('kmover.user')({
      where:{
          refresh_token: refreshToken
      }
  });
  if(!user) return res.sendStatus(204);
  const userId = user.id;
  await db.update({refresh_token: null},{
      where:{
          id: userId
      }
  });
  res.clearCookie('refreshToken');
  return res.sendStatus(200);


}
*/
};
