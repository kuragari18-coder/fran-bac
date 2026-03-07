/**
 * Seed 20 MORE technology products with images (adds to existing).
 * Images from Unsplash (free to use). Run: node scripts/seed-products-with-images.js
 */
require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("../models/product.model");

const IMG = "https://images.unsplash.com/photo-";
const Q = "?w=600&q=80";

const PRODUCTS = [
  { name: "Pro Laptop 14\" M3", description: "Ultra-thin laptop with M3 chip, 18-hour battery, Liquid Retina display.", price: 84999, imageUrl: IMG + "1517336714731-489689fd1ca8" + Q },
  { name: "Wireless Gaming Mouse", description: "25K DPI sensor, 70-hour battery, 7 programmable buttons. RGB lighting.", price: 4299, imageUrl: IMG + "1527814056477-403d0345fd1c" + Q },
  { name: "Noise-Cancel Headphones", description: "Over-ear with 30hr battery, transparency mode, foldable design.", price: 11999, imageUrl: IMG + "1505740420928-5e560c06d30e" + Q },
  { name: "Smartphone Pro 256GB", description: "6.7\" AMOLED 120Hz, 50MP triple camera, 5000mAh, 65W fast charge.", price: 42999, imageUrl: IMG + "1511707171634-5f897ff02aa9" + Q },
  { name: "Smartwatch Sport", description: "GPS, heart rate, sleep tracking. 5ATM water resistant. 10-day battery.", price: 8999, imageUrl: IMG + "1523275335684-37898b6baf30" + Q },
  { name: "DSLR Camera 24MP", description: "4K video, optical stabilization, Wi-Fi. Kit with 18-55mm lens.", price: 34999, imageUrl: IMG + "1516035069371-29a1b244cc32" + Q },
  { name: "Tablet 11\" Pro", description: "Liquid Retina, M2 chip, Apple Pencil support. Perfect for design.", price: 47999, imageUrl: IMG + "1544244015-0df4b3ffc6b0" + Q },
  { name: "Bluetooth Speaker", description: "360° sound, IP67 waterproof, 20hr playtime. Party pairing mode.", price: 5499, imageUrl: IMG + "1545454670-e291f3e0697a" + Q },
  { name: "Gaming Monitor 27\"", description: "240Hz, 1ms, G-Sync. HDR400. Curved QHD display.", price: 22999, imageUrl: IMG + "1527443224154-c4a3942d3acf" + Q },
  { name: "Drone 4K", description: "30min flight, 4K gimbal camera, obstacle avoidance. Follow-me mode.", price: 32999, imageUrl: IMG + "1473968512647-3e4a82ae6c41" + Q },
  { name: "Smart Bulb 4-Pack", description: "16M colors, voice control, scheduling. No hub required.", price: 1999, imageUrl: IMG + "1558618666-fcd25c85cd64" + Q },
  { name: "Action Camera", description: "4K60, waterproof to 10m, image stabilization. Vlogging kit.", price: 14999, imageUrl: IMG + "1502920917128-1aa500764cbd" + Q },
  { name: "E-Reader 7\"", description: "300ppi E-Ink, warm light, 32GB. Read for weeks on one charge.", price: 8999, imageUrl: IMG + "1495446815904-a4f9d96f1c8d" + Q },
  { name: "USB-C Hub 7-in-1", description: "HDMI 4K, SD/microSD, 3x USB 3.0, 100W PD. Aluminum body.", price: 2799, imageUrl: IMG + "1593642632557-4a1c3244f5a5" + Q },
  { name: "Robot Vacuum", description: "Lidar mapping, auto-empty base, app control. Cleans 200m².", price: 24999, imageUrl: IMG + "1581092160562-eb26343b3bce" + Q },
  { name: "Streaming Webcam", description: "1080p60, ring light, built-in mic. Auto focus and exposure.", price: 4999, imageUrl: IMG + "1575908523642-4c2e2f1b7452" + Q },
  { name: "Mechanical Keypad", description: "Compact 65%. Hot-swap, RGB. PBT keycaps.", price: 4499, imageUrl: IMG + "1511467687858-23f96ee32b2f" + Q },
  { name: "Power Bank 20Ah", description: "65W PD output. Charges laptop and phone. Dual USB-C.", price: 3999, imageUrl: IMG + "1609091839311-2742b2f2b786" + Q },
  { name: "Smart Scale", description: "Weight, BMI, body fat %. Syncs with health apps. Glass top.", price: 2499, imageUrl: IMG + "1571019614242-c5c5ecee2a6e" + Q },
  { name: "LED Ring Light", description: "10\" with tripod. Dimmable, 3 color temps. For streaming and video.", price: 1799, imageUrl: IMG + "1598488035133-bd2461620d5d" + Q },
];

async function seedProductsWithImages() {
  await mongoose.connect(process.env.ATLAS_URI);
  await Product.insertMany(PRODUCTS);
  console.log(`Added ${PRODUCTS.length} technology products with images.`);
  process.exit(0);
}

seedProductsWithImages().catch((err) => {
  console.error(err);
  process.exit(1);
});
