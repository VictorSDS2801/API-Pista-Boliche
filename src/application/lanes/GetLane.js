class GetLane {
    constructor(laneRepository) {
        this.laneRepository = laneRepository
    }

    async execute(id) {
        const lane = await this.laneRepository.getById(id)
        if (!lane) {
            const e  = new Error("Pista não encontrada")
            e.status = 404
            throw e
        }
        return lane
    }
}

module.exports = GetLane