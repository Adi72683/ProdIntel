import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import productRoutes from "./routes/products.js";


const result = dotenv.config();


console.log("====================================");
console.log("Current Working Directory:", process.cwd());
console.log("Server File Directory:", path.resolve());
console.log("Dotenv Result:", result);
console.log("SERP KEY:", process.env.SERP_API_KEY);
console.log("PORT:", process.env.PORT);
console.log("====================================");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});