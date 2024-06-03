import mongoose from "mongoose";

const url = "mongodb://localhost:27017/Gareebo";

const connectDb = async () => {
  if (mongoose.connections[0].readyState) {
    console.log('Already connected to the database.');
    return;
  }

  try {
    await mongoose.connect(url);
    console.log("Connected to Gareebo database");
  } catch (error) {
    console.error(error);
  }
};

export default connectDb;