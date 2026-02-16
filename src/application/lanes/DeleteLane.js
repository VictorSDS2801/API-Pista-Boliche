class DeleteLane {
    constructor(laneRepository) {
        this.laneRepository = laneRepository
    }

    async execute(id) {
        const ok = await this.laneRepository.delete(id)
        if (!ok) {
            const e = new Error("Pista não encontrada")
            e.status = 404
            throw e
        }
        return true
    }
}

module.exports = DeleteLane