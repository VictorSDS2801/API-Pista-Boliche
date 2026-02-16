const LaneModel = require("../models/LaneModel")

class LaneMongoRepository {
    async create(lane) {
        const created = await LaneModel.create({
            name: lane.name,
            isActive: lane.isActive
        })

        return {
            id: created._id.toString(),
            name: created.name,
            isActive: created.isActive,
            createdAt: created.createdAt,
            updatedAt: created.updatedAt
        }
    }

    async list() {
        const docs = await LaneModel.find().sort({ createdAt: -1 })
        return docs.map((d) => ({
            id: d._id.toString(),
            name: d.name,
            isActive: d.isActive,
            createdAt: d.createdAt,
            updatedAt: d.updatedAt
        }))
    }

    async getById(id) {
        const d = await LaneModel.findById(id)
        if (!d) return null
        return {
            id: d._id.toString(),
            name: d.name,
            isActive: d.isActive,
            createdAt:  d.createdAt,
            updatedAt: d.updatedAt
        }
    }

    async update(id, data) {
        const updated = await LaneModel.findByIdAndUpdate(
            id,
            { $set: data }, 
            { new: true, runValidators: true}
        )

        if (!updated) return null

        return {
            id: updated._id.toString(),
            name: updated.name,
            isActive: updated.isActive,
            createdAt: updated.createdAt,
            updatedAt: updated.updatedAt
        }
    }

    async delete(id) {
        const deleted = await LaneModel.findByIdAndDelete(id)
        return !!deleted
    }
}

module.exports = LaneMongoRepository