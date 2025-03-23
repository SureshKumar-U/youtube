const express = require("express")
const router = express.Router()
const  multer = require('multer') ;
const upload = multer();
const uploadFileToS3 = require("../controllers/uploadFile.controller")




router.post("/", upload.single('file'), uploadFileToS3)


module.exports = router