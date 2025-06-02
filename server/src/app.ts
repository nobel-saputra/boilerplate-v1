import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(express.json()); // Body parser untuk JSON
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000", // Izinkan Next.js frontend
    credentials: true, // Jika ingin mengirim cookies/header otentikasi
  })
);

// Basic Route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express backend!" });
});

// Contoh rute lain (opsional)
// app.use('/api/users', userRoutes);

export default app;
