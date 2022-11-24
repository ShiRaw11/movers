/*const multer = require('multer');


// Create multer object
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'files/');
  },

  //  file extensions 
  filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
//function create
//

//module.exports={ 
    
    const image=(file)=>{
    const upload = multer({ storage: storage,  limits : {fileSize : 1000000} }).single({file});
}
//}
//objects
const upload = multer({ storage: storage,  limits : {fileSize : 1000000} }).single('licence');

upload(req, res, (err) => {
    if(err) {
      res.status(400).send("Something went wrong!");
    }
    res.send(req.file);
  });



  */
;  