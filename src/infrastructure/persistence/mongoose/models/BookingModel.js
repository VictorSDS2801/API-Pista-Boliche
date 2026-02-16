// src/infrastructure/persistence/mongoose/models/BookingModel.js
const mongoose = require("mongoose")

const BookingSchema = new mongoose.Schema(
  {
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
    laneId: { type: mongoose.Schema.Types.ObjectId, ref: "Lane", required: true },

    // Guardamos como string YYYY-MM-DD pra facilitar índice único por dia
    date: { type: String, required: true },

    // 16, 18, 20, 22
    startHour: { type: Number, required: true },
    endHour: { type: Number, required: true },
  },
  { timestamps: true }
)

// ✅ Regra de negócio no banco: 1 booking por pista+data+horário
BookingSchema.index({ laneId: 1, date: 1, startHour: 1 }, { unique: true })

module.exports = mongoose.model("Booking", BookingSchema)
