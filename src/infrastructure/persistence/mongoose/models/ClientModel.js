const mongoose = require("mongoose")

const ClientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            trim: true,
            default:  null
        },
        phone: {
            type: String,
            trim: true,
            default: null
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("Client", ClientSchema)