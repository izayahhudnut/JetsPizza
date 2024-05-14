
import type { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

// Create a single pool for use in all API calls
const pool = new Pool({
  connectionString: process.env.PRODUCTS_DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function getProducts() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM products;');
    return result.rows;
  } finally {
    client.release();
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const products = await getProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch products.' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
