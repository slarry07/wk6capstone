import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import posts from "./routes/posts.mjs";
import { connectDB } from "./db/conn.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /posts routes
app.use("/posts", posts);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.");
});

// Connect to DB, then start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port: ${PORT}`);
  });
}).catch(err => {
  console.error("❌ Failed to start server:", err);
});

