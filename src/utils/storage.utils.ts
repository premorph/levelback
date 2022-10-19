import {  Request } from 'express';
import multer,{diskStorage} from 'multer'
const storage = diskStorage({
  destination: function (req:Request, file:any, cb:any) {
    const pathStorage = `${__dirname}/../storage`;
    cb(null, pathStorage);
  },
  filename: function (req:Request, file:any, cb:any) {
    const ext = file.originalname.split(".").pop();
    declare type extP = "jpg"| "png" |"jpeg";
    if(ext!== typeof extP)
    {
      cb(new Error("extension no permitida"))
    }
    const filename = `file-${Date.now()}.${ext}`;
    cb(null, filename);
  },
});

const uploadMiddleware = multer({ storage });

export {uploadMiddleware}
