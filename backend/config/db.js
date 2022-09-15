import mongoose from 'mongoose';

export default async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.bold);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
