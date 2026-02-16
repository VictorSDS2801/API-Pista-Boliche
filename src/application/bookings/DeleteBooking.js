// src/application/bookings/DeleteBooking.js
class DeleteBooking {
  constructor(bookingRepository) {
    this.bookingRepository = bookingRepository
  }

  async execute(id) {
    const ok = await this.bookingRepository.delete(id)
    if (!ok) {
      const e = new Error("Agendamento não encontrado")
      e.status = 404
      throw e
    }
    return true
  }
}

module.exports = DeleteBooking
