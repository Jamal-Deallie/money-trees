const multer = require('multer');
const path = require('path');

module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
      cb(new Error('Unsupported file type!'), false);
      return;
    }
    cb(null, true);
  },
});




// {
//     "firstName": "jamal",
//     "lastName": "Deallie",
//     "email": "jamaltesting@gmail.com",
//     "creditScore": 600,
//     "password": "password1234",
//     "passwordConfirm": "password1234"
// }