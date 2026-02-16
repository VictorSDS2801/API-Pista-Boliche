// src/application/bookings/CreateBooking.js
const Booking = require("../../domain/bookings/Bookings")

class CreateBooking {
  constructor(bookingRepository) {
    this.bookingRepository = bookingRepository
  }

  async execute(input) {
    const booking = new Booking(input)

    // valida se client e lane existem
    const clientExists = await this.bookingRepository.existsClient(booking.clientId)
    if (!clientExists) {
      const e = new Error("Cliente não encontrado")
      e.status = 404
      throw e
    }

    const laneExists = await this.bookingRepository.existsLane(booking.laneId)
    if (!laneExists) {
      const e = new Error("Pista não encontrada")
      e.status = 404
      throw e
    }

    try {
      return await this.bookingRepository.create(booking)
    } catch (err) {
      // conflito por índice único (pista já reservada nesse horário)
      if (err && (err.code === 11000 || err.name === "MongoServerError")) {
        const e = new Error("Essa pista já está reservada nesse horário")
        e.status = 409
        throw e
      }
      throw err
    }
  }
}

module.exports = CreateBooking
