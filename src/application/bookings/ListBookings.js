// src/application/bookings/ListBookings.js
class ListBookings {
  constructor(bookingRepository) {
    this.bookingRepository = bookingRepository
  }

  async execute() {
    return await this.bookingRepository.list()
  }
}

module.exports = ListBookings
