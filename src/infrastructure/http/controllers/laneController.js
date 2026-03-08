const LaneMongoRepository = require("../../persistence/mongoose/repositories/LaneMongoRepository")

const CreateLane = require("../../../application/lanes/CreateLane")
const ListLanes = require("../../../application/lanes/ListLanes")
const GetLane = require("../../../application/lanes/GetLane")
const UpdateLane = require("../../../application/lanes/UpdateLane")
const DeleteLane = require("../../../application/lanes/DeleteLane")

const repo = new LaneMongoRepository()

async function create(req, res, next) {
  try {
    const useCase = new CreateLane(repo)
    const result = await useCase.execute(req.body)
    res.status(201).json(result)
  } catch (err) {
    next(err)
  }
}

async function list(req, res, next) {
  try {
    const useCase = new ListLanes(repo)
    const result = await useCase.execute()
    res.json(result)
  } catch (err) {
    next(err)
  }
}

async function getById(req, res, next) {
  try {
    const useCase = new GetLane(repo)
    const result = await useCase.execute(req.params.id)
    res.json(result)
  } catch (err) {
    next(err)
  }
}

async function update(req, res, next) {
  try {
    const useCase = new UpdateLane(repo)
    const result = await useCase.execute(req.params.id, req.body)
    res.json(result)
  } catch (err) {
    next(err)
  }
}

async function remove(req, res, next) {
  try {
    const useCase = new DeleteLane(repo)
    await useCase.execute(req.params.id)
    res.status(204).send()
  } catch (err) {
    next(err)
  }
}

module.exports = { create, list, getById, update, remove }
