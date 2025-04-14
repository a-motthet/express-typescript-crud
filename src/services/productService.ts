import pool from "../utils/db";
import Product from "../models/productModels";

export const getAllProduct = async () => {
  const client = await pool.connect();
  const result = await client.query("SELECT * FROM products ORDER BY id DESC");
  client.release();
  return result.rows.map((row) => new Product(row.id, row.name, row.price));
};

export const getById = async (id: number) => {
  const client = await pool.connect();
  const result = await client.query("SELECT * FROM products WHERE id = $1", [
    id,
  ]);
  client.release();

  if (result.rows.length === 0) {
    return null;
  } else {
    const row = result.rows[0];
    return new Product(row.id, row.name, row.price);
  }
};

export const addProduct = async (product: Product) => {
  const client = await pool.connect();
  const result = await client.query(
    "INSERT INTO products (name, price) VALUES ($1, $2) RETURNING id",
    [product.name, product.price]
  );
  client.release();
  return result.rows[0].id;
};

export const updateProduct = async (product: Product) => {
  const client = await pool.connect();
  await client.query(
    "UPDATE products SET name = $1, price = $2 WHERE id = $3",
    [product.name, product.price, product.id]
  );
  client.release();
};

export const deleteProduct = async (id: number) => {
  const client = await pool.connect();
  await client.query("DELETE FROM products WHERE id = $1", [id]);
  client.release();
};
