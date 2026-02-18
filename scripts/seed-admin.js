/**
 * Create the first admin user.
 * Run: node scripts/seed-admin.js
 * Requires: ADMIN_SECRET and optionally ADMIN_EMAIL, ADMIN_PASSWORD in .env
 */
require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

async function seedAdmin() {
  const email = process.env.ADMIN_EMAIL || "admin@francine.tech";
  const password = process.env.ADMIN_PASSWORD || "admin123";
  const name = process.env.ADMIN_NAME || "Admin";

  await mongoose.connect(process.env.ATLAS_URI);
  const existing = await User.findOne({ email });
  if (existing) {
    console.log("Admin already exists:", email);
    process.exit(0);
    return;
  }

  const hashed = await bcrypt.hash(password, 10);
  await User.create({ name, email, password: hashed, role: "Admin" });
  console.log("Admin created:", email, "| Password:", password);
  process.exit(0);
}

seedAdmin().catch((err) => {
  console.error(err);
  process.exit(1);
});
