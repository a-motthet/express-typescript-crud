import express from "express";
import { Request, Response } from "express";
import pool from "../utils/db";

const router = express.Router();

router.get("/testdb", async (_: Request, res: Response) => {
  try {
    const client = await pool.connect();
    await client.query("SELECT NOW()");
    client.release();

    res.status(200).json({ Message: "Database connection successful" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ Message: "database connection failed!", error: error });
  }
});

export default router;
