class ListLanes {
    constructor(laneRepository) {
        this.laneRepository = laneRepository
    }

    async execute() {
        return await this.laneRepository.list()
    }
}

module.exports = ListLanes