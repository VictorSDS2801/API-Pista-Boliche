const Lane = require("../../domain/lanes/Lane")

class CreateLane {
    constructor(laneRepository) {
        this.laneRepository = laneRepository
    }

    async execute(input) {
        const lane = new Lane(input)
        return await this.laneRepository.create(lane)
    }
}

module.exports = CreateLane