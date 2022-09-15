import express from 'express';
import dotenv from 'dotenv';

import goalRoutes from './routes/goalRoutes.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', goalRoutes);

app.listen(PORT, () => {
  console.log(`Listening on post: ${PORT}`);
});
