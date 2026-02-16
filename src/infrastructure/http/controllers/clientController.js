const ClientMongoRepository = require("../../persistence/mongoose/repositories/ClientMongoRepository")

const CreateClient = require("../../../application/clients/CreateClient")
const ListClients = require("../../../application/clients/ListClients")
const GetClient = require("../../../application/clients/GetClient")
const UpdateClient = require("../../../application/clients/UpdateClient")
const DeleteClient = require("../../../application/clients/DeleteClient")

const repo = new ClientMongoRepository()

async function create(req, res, next) {
    try {
        const useCase = new CreateClient(repo)
        const result = await useCase.execute(req.body)
        res.status(201).json(result)
    } catch (err) {
        next(err)
    }
}

async function list(req, res, next) {
    try {
        const useCase = new ListClients(repo)
        const result = await useCase.execute()
        res.json(result)
    } catch (err) {
        next(err)
    }
}

async function getById(req, res, next) {
    try {
        const useCase = new GetClient(repo)
        const result = await useCase.execute(req.params.id)
        res.json(result)
    } catch (err) {
        next(err)
    }
}

async function update(req, res, next) {
    try {
        const useCase = new UpdateClient(repo)
        const result = await useCase.execute(req.params.id, req.body)
        res.json(result)
    } catch (err) {
        next(err)
    }
}

async function remove(req, res, next) {
    try {
        const useCase = new DeleteClient(repo)
        await useCase.execute(req.params.id)
        res.status(204).send()
    } catch (err) {
        next(err)
    }
}

module.exports = { create, list, getById, update, remove }