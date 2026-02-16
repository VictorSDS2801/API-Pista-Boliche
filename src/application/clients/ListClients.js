class ListClients {
    constructor(clientRepository) {
        this.clientRepository = clientRepository
    }

    async execute() {
        return await this.clientRepository.list()
    }
}

module.exports = ListClients