import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.get('/orders', async (req, res) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 4; 
  const skip = (page - 1) * limit; 
console.log(skip, limit);
  try {
    const orders = await prisma.orderlist.findMany({
      skip: skip,
      take: limit,
    });
    console.log('Fetched orders:', orders); 
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error); 
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
