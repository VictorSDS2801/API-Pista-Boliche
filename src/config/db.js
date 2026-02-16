// src/config/db.js
const mongoose = require("mongoose")
const dns = require("dns")
const env = require("./env")

async function connectDb() {
  if (!env.MONGO_URI) {
    throw new Error("MONGO_URI não definido no .env")
  }

  // 🔧 Força DNS confiável pro resolveSrv (MongoDB Atlas usa SRV)
  dns.setDefaultResultOrder("ipv4first")
  dns.setServers(["1.1.1.1", "8.8.8.8"]) // Cloudflare + Google (IPv4)

  mongoose.set("strictQuery", true)

  await mongoose.connect(env.MONGO_URI)

  console.log("✅ Conectado ao MongoDB")
}

module.exports = { connectDb }
