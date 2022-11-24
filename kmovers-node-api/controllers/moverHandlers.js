
const db = require("../config");

module.exports = {
    getMoverHandler: async (req, res,id) => {
   

        const mover = await db.getById(id,'kmover.user',);
        res.status(200).json({ mover });
    },
  
       
}