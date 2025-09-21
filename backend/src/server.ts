import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import projectRoutes from "./routes/projectRoutes";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
