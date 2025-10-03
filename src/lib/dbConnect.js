import mongoose from "mongoose";

let isConnected = false; // track the connection

export async function connectDB() {
  if (isConnected) {
    return; // already connected
  }

  if (mongoose.connection.readyState === 1) {
    isConnected = true;
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI);

    isConnected = db.connections[0].readyState === 1;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}
