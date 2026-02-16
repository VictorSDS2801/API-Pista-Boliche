require("dotenv").config()

const env = {
    PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI || "",
    NODE_ENV: process.env.NODE_ENV || "development",
}

console.log("MONGO_URI:", process.env.MONGO_URI)

module.exports = env