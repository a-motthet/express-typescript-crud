import express from "express";
// import { Request, Response } from "express";
import * as productController from "../controllers/productController";

const router = express.Router();

router.get("/products", productController.getAllProduct);

router.get("/products/:id", productController.getById);

router.post("/products", productController.addProduct);

router.put("/products/:id", productController.updateProduct);

router.delete("/products/:id", productController.deleteProduct);

export default router;
