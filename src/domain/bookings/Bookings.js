// src/domain/bookings/Booking.js
const { validateBookingInput, calculateEndHour } = require("./BookingRules")

class Booking {
  constructor({ id = null, clientId, laneId, date, startHour }) {
    if (!clientId || typeof clientId !== "string") {
      const e = new Error("clientId é obrigatório")
      e.status = 400
      throw e
    }

    if (!laneId || typeof laneId !== "string") {
      const e = new Error("laneId é obrigatório")
      e.status = 400
      throw e
    }

    validateBookingInput({ date, startHour })

    this.id = id
    this.clientId = clientId
    this.laneId = laneId
    this.date = date
    this.startHour = startHour
    this.endHour = calculateEndHour(startHour)
  }
}

module.exports = Booking
