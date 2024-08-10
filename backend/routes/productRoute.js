import express from "express";
import multer from "multer";
import { addProduct, listProduct, removeproduct } from "../controllers/productController.js";

const productRouter = express.Router();

// Image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  }
});

const upload = multer({ storage:storage });

productRouter.post("/add", upload.single("image"), addProduct);
productRouter.get("/list",listProduct)
productRouter.post("/remove",removeproduct)


export default productRouter;
