import path from 'path';
import multer from 'multer';

const storage = multer.diskStorage ({
    destination: function (req: any, file: any, cb: any) {
        cb(null, path.join(__dirname, "../uploads"));
    },
    filename: function(req: any, file: any, cb: any) {
        cb(null, Date.now() + file.originalname);
    }
});

const fileFilter = (req: any, file: any, cb: any) => {
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png"){
        cb(null, true);
    }
    else {
        cb (null, false);
    }
}

module.exports = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
        files: 5
    },
    fileFilter: fileFilter
})