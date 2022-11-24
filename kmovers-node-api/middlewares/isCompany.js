const db = require('..//config');

module.exports={
    isCompany: async (req, res,next) => {
   const  role = await db.search('kmover.role', {title: 'company'})
   if (!role)
   return res.status(400).json({ errored: true, error: "no authorization" });
     else  res.status(500).json({msg: "authorization successful"});
    }


}