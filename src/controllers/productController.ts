import { Request, Response } from "express";
import * as productService from "../services/productService";

export const getAllProduct = async (_: Request, res: Response) => {
  try {
    const products = await productService.getAllProduct();
    res.status(200).json(products);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ Message: err.message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const products = await productService.getById(id);
    if (products === null) {
      res.status(404).json({
        Message: "Product not found",
      });
    } else {
      res.status(200).json(products);
    }
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ Message: err.message });
  }
};

export const addProduct = async (req: Request, res: Response) => {
  try {
    if (!req.body) {
      res.status(400).json({ Message: "Missing value" });
      return;
    }

    const { name, price } = req.body;
    //ดัก error
    if (!name || !price) {
      res.status(400).json({ Message: "Invalid data" });
      return;
    }

    if (price <= 0) {
      res.status(400).json({ Message: "Price must be a positive number" });
      return;
    }

    await productService.addProduct({
      id: -1, // ใส่ค่า -1 หรือค่าอื่นที่ไม่สำคัญ เพราะเราจะให้ฐานข้อมูลสร้าง ID ใหม่ให้
      name,
      price,
    });
    res.status(201).json({ Message: "Add product successfully" });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ Message: err.message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (!req.body) {
      res.status(400).json({ Message: "Missing value" });
      return;
    }

    const { name, price } = req.body;

    const product = await productService.getById(id);
    //ดัก error
    if (product === null) {
      res.status(404).json({ Message: "Product not found" }); // 404 Not Found
      return;
    }

    if (price <= 0) {
      res.status(400).json({ Message: "Price must be a positive number" });
      return;
    }

    await productService.updateProduct({
      id,
      name,
      price,
    });
    res.status(200).json({ Message: "Update Product Successfully" });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ Message: err.message });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const product = await productService.getById(id);
    //ดัก error
    if (product === null) {
      res.status(404).json({ Message: "Product not found naja" }); // 404 Not Found
      return;
    }

    await productService.deleteProduct(id);
    res.status(200).json({ Message: "Delete Product Successfully" });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ Message: err.message });
  }
};
