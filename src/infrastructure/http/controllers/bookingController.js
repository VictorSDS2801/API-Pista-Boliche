// src/infrastructure/http/controllers/bookingController.js
const BookingMongoRepository = require("../../persistence/mongoose/repositories/BookingMongoRepository")

const CreateBooking = require("../../../application/bookings/CreateBooking")
const ListBookings = require("../../../application/bookings/ListBookings")
const DeleteBooking = require("../../../application/bookings/DeleteBooking")

const repo = new BookingMongoRepository()

async function create(req, res, next) {
  try {
    const useCase = new CreateBooking(repo)
    const result = await useCase.execute(req.body)
    res.status(201).json(result)
  } catch (err) {
    next(err)
  }
}

async function list(req, res, next) {
  try {
    const useCase = new ListBookings(repo)
    const result = await useCase.execute()
    res.json(result)
  } catch (err) {
    next(err)
  }
}

async function remove(req, res, next) {
  try {
    const useCase = new DeleteBooking(repo)
    await useCase.execute(req.params.id)
    res.status(204).send()
  } catch (err) {
    next(err)
  }
}

module.exports = { create, list, remove }
