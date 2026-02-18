/**
 * Seed 20 technology products.
 * Run: node scripts/seed-products.js
 */
require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("../models/product.model");

const PRODUCTS = [
  { name: "Neural AI Earbuds Pro", description: "Next-gen earbuds with real-time AI noise cancellation and 30-hour battery life.", price: 8999 },
  { name: "Quantum LED Smart Watch", description: "Advanced health tracking, blood oxygen, ECG, and 7-day battery with always-on display.", price: 14999 },
  { name: "AR Glasses XR-2000", description: "Lightweight augmented reality glasses for work and entertainment with spatial computing.", price: 29999 },
  { name: "Portable Solar Power Bank 30W", description: "30W fast charging with built-in solar panel. Powers laptops and devices on the go.", price: 3499 },
  { name: "4K Webcam with AI Background", description: "Professional streaming webcam with auto-framing, HDR, and AI background blur.", price: 6499 },
  { name: "Mechanical Keyboard RGB", description: "Premium low-profile mechanical keys with per-key RGB and hot-swap switches.", price: 5499 },
  { name: "Wireless Noise-Canceling Headphones", description: "Industry-leading ANC, 40-hour battery, multipoint Bluetooth 5.3.", price: 12999 },
  { name: "Smart Home Hub Pro", description: "Central hub for Matter, Zigbee, and Z-Wave. Voice control and automation.", price: 7999 },
  { name: "USB-C 100W Laptop Dock", description: "Single-cable dock with dual 4K display, Ethernet, and 100W PD charging.", price: 7499 },
  { name: "Portable SSD 2TB", description: "2000MB/s read speed, IP65 waterproof, shock-resistant. USB 4.0 compatible.", price: 9999 },
  { name: "Ergonomic Vertical Mouse", description: "Reduces wrist strain with 57° vertical angle. Programmable buttons.", price: 3299 },
  { name: "E-Ink Tablet 10.3\"", description: "Paper-like display for reading and note-taking. Weeks of battery on a single charge.", price: 16999 },
  { name: "Wireless Charging Pad 3-in-1", description: "Charge phone, earbuds, and watch simultaneously. 15W fast charging.", price: 2999 },
  { name: "Streaming Microphone Pro", description: "Broadcast-quality condenser mic with built-in USB interface and monitoring.", price: 6499 },
  { name: "VR Headset Lightweight", description: "Standalone VR with 4K displays, 128GB storage, and 2-hour battery.", price: 19999 },
  { name: "Smart Ring Health Tracker", description: "Sleep, heart rate, SpO2, and activity tracking in a sleek titanium ring.", price: 11999 },
  { name: "Ultrawide Monitor 34\" Curved", description: "3440x1440 curved IPS, 165Hz, HDR400. Perfect for productivity and gaming.", price: 24999 },
  { name: "Desk Lamp with Wireless Charge", description: "Adjustable LED lamp with Qi wireless charging pad built into the base.", price: 3799 },
  { name: "Portable Projector 1080p", description: "Compact 1080p projector with Android TV, 300 ANSI lumens, built-in battery.", price: 13999 },
  { name: "Fitness Tracker Band", description: "GPS, 100+ workout modes, SpO2, stress monitoring. 14-day battery life.", price: 4999 },
];

async function seedProducts() {
  await mongoose.connect(process.env.ATLAS_URI);

  await Product.deleteMany({});
  await Product.insertMany(PRODUCTS);
  console.log(`Seeded ${PRODUCTS.length} technology products.`);
  process.exit(0);
}

seedProducts().catch((err) => {
  console.error(err);
  process.exit(1);
});
