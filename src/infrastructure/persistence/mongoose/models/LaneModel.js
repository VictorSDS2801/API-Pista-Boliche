const mongoose = require("mongoose")

const LaneSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        isActive: {
            type: Boolean,
            default: true
        },
    },
    { timastamps: true }
)

module.exports = mongoose.model("Lane", LaneSchema)