const Client = require("../../domain/clients/Client")

class CreateClient {
    constructor(clientRepository) {
        this.clientRepository = clientRepository
    }

    async execute(input) {
        const client = new Client(input)
        return await this.clientRepository.create(client)
    }
}

module.exports = CreateClient