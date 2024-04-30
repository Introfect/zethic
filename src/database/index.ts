// database/index.ts
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);
    console.log('MongoDB Connected');
  } catch (error:any) {
    console.error('Error connecting to MongoDB:', error.message);
    throw new Error('Error connecting to MongoDB');
  }
};

export default connectDB;
