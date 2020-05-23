//Do some validations file types , max file sizes


const path = require('path')
const multer = require('multer')


const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'uploads')                   // image upload in locally uploads folder
    },
    filename :function(req,file,cb){
        let ext = path.extname(file.originalname)
        cb(null,Date.now()+ext)
    }
})

var upload = multer({
storage:storage,
fileFilter : function(req,file,callback){

    if(
        file.mimetype == "image/png" ||           // support only jpeg and png files
        file.mimetype == "image/jpeg"
    ){
         callback(null,true)

    }else{
        console.log('only jpg  & png file supported!')
       callback(null,false)
    }

},
 limits : {
     fileSize : 1024 * 1024 * 2        //image size
 }

})

module.exports = upload;