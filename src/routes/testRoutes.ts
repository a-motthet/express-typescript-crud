import express from "express";
import { Request, Response } from "express";

const router = express.Router();

router.get("/", (_: Request, res: Response): void => {
  res.send("Hello World!");
});

router.get("/about", (_: Request, res: Response): void => {
  res.send("About Page");
});

export default router;
