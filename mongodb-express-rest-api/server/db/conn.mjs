import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config(); // load .env

const connectionString = process.env.ATLAS_URI;
const client = new MongoClient(connectionString);

let db;

export async function connectDB() {
  try {
    await client.connect();
    db = client.db("sample_training"); // change db name if needed
    console.log("✅ MongoDB connected");
    return db;
  } catch (e) {
    console.error("❌ MongoDB connection failed:", e);
    throw e;
  }
}

export { db };

