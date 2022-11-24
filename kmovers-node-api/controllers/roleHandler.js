const { isEmpty } = require("lodash");
const db = require ("../config");

module.exports = {
    roleHandler: async (req, res) => {
        const newRole=req.body;
        if(!isEmpty(newRole)){
            const role = await db.create("kmover.role",  newRole );
            res.json( {role },{ msg: "You have successfully created a new role" });
            console.log(role)
            }
            else 
           
              return res.status(500).json({
                "message": "role Creation Failed"
              })
  
    },
}