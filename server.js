const express = require("express")
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const app = express();
app.set("trust proxy", 1);
const orderRoutes = require("./routes/order.routes");
const userRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");

const connectDb = require("./config/db");

const allowedOrigins = [
  "https://ecommerce-frontend-ruddy-kappa.vercel.app",
  "https://franixia.netlify.app",
  "https://www.franixia.netlify.app",
  "http://localhost:5000",
  "http://localhost:5173",
  "http://localhost:3000",
  "http://localhost:5500",
  "http://127.0.0.1:5000",
  "http://127.0.0.1:3000",
  "http://127.0.0.1:5500",
  "http://127.0.0.1:8080",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || origin === "null" || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 5000;

app.use("/api/order", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Backend is running" });
});

app.listen(PORT, () => {
  connectDb();
  console.log(`Server running on http://localhost:${PORT}`);
});
