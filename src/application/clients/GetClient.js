class GetClient {
    constructor(clientRepository) {
        this.clientRepository = clientRepository
    }

    async execute(id) {
        const client = await this.clientRepository.getById(id)
        if (!client) {
            const e = new Error("cliente não encontrado")
            e.status = 404
            throw e
        }
       return client
    }
}

module.exports = GetClient