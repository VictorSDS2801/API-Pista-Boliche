const ClientModel = require("../models/ClientModel")

class ClientMongoRepository {
    async create(client) {
        const created = await ClientModel.create({
            name: client.name,
            email: client.email,
            phone: client.phone
        })

        return {
            id: created._id.toString(),
            name: created.name,
            email: created.email,
            phone: created.phone,
            createdAt: created.createdAt,
            updatedAt: created.updatedAt
        }
    }

    async list() {
        const docs = await ClientModel.find().sort({ createdAt: -1 })
        return docs.map((d) => ({
            id: d._id.toString(),
            name: d.name,
            email: d.email,
            phone: d.phone,
            createdAt: d.createdAt,
            updatedAt: d.updatedAt
        }))
    }

    async getById(id) {
        const d = await ClientModel.findById(id)
        if (!d) return null
        return {
            id: d._id.toString(),
            name: d.name,
            email: d.email,
            phone: d.phone,
            createdAt: d.createdAt,
            updatedAt: d.updatedAt,
        }
    }

    async update(id, data) {
        const updated = await ClientModel.findByIdAndUpdate(
            id,
            { $set: data },
            { new: true, runValidators: true }
        )
        if (!updated) return null

        return {
            id: updated._id.toString(),
            name: updated.name,
            email: updated.email,
            phone: updated.phone,
            createdAt: updated.createdAt,
            updatedAt: updated.updatedAt,
        }
    }

    async delete(id) {
        const deleted = await ClientModel.findByIdAndDelete(id)
        return !!deleted
    }
}

module.exports = ClientMongoRepository