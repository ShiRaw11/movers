
const multer = require("multer");

// Create multer object
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "..//files");
  },

  //  file extensions
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

   
       module.exports = {
    
        fileUpload: async () => {
            let upload = multer({
                storage: storage,
                limits: { fileSize: 1000000 },
              }).single('licence');
              // let certificate = upload.single('certificate')
              console.log(upload);
              /*upload(req, res, (err) => {
                if (err) {
                  res.status(400).send("Something went wrong!");
                }
                res.send(req.file);
              });*/
        }}
      // let certificate = upload.single('certificate')
     
     //
  
