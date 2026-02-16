const Lane = require("../../domain/lanes/Lane")

class UpdateLane {
    constructor(laneRepository) {
        this.laneRepository = laneRepository
    }

    async execute(id, input) {
        const current = await this.laneRepository.getById(id)
        if (!current) {
            const e = new Error("Pista não encontrada")
            e.status = 404
            throw e
        }

        const merged = {
            name: input.name ?? current.name,
            isActive: input.isActive ?? current.isActive,
        }

        const validated = new Lane({ id, ...merged})

        const updated = await this.laneRepository.update(id, {
            name: validated.name,
            isActive: validated.isActive,
        })

        if (!updated) {
            const e = new Error("Pista não encontrada")
            e.status = 404
            throw e
        }

        return updated
    }
}

module.exports = UpdateLane