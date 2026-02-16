// src/infrastructure/persistence/mongoose/repositories/BookingMongoRepository.js
const BookingModel = require("../models/BookingModel")
const ClientModel = require("../models/ClientModel")
const LaneModel = require("../models/LaneModel")

class BookingMongoRepository {
  async existsClient(id) {
    const found = await ClientModel.exists({ _id: id })
    return !!found
  }

  async existsLane(id) {
    const found = await LaneModel.exists({ _id: id })
    return !!found
  }

  async create(booking) {
    const created = await BookingModel.create({
      clientId: booking.clientId,
      laneId: booking.laneId,
      date: booking.date,
      startHour: booking.startHour,
      endHour: booking.endHour,
    })

    return {
      id: created._id.toString(),
      clientId: created.clientId.toString(),
      laneId: created.laneId.toString(),
      date: created.date,
      startHour: created.startHour,
      endHour: created.endHour,
      createdAt: created.createdAt,
      updatedAt: created.updatedAt,
    }
  }

  async list() {
    const docs = await BookingModel.find().sort({ date: -1, startHour: 1 })

    return docs.map((d) => ({
      id: d._id.toString(),
      clientId: d.clientId.toString(),
      laneId: d.laneId.toString(),
      date: d.date,
      startHour: d.startHour,
      endHour: d.endHour,
      createdAt: d.createdAt,
      updatedAt: d.updatedAt,
    }))
  }

  async delete(id) {
    const deleted = await BookingModel.findByIdAndDelete(id)
    return !!deleted
  }
}

module.exports = BookingMongoRepository
