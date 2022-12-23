import express from 'express';
import multer from 'multer';
import { createUser, getAllUser } from '../controllers/user.controller.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `uploads/`)
    },
    filename: function (req, file, cb) {
      
      cb(null, `${Date.now()}-${file.originalname}`)
    }
})
  
const upload = multer({ storage: storage })

// Routes
router.post("/users", upload.single("image"), createUser);
router.get("/users", getAllUser);

export default router;