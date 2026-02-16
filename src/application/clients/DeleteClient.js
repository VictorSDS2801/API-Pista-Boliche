class DeleteClient {
    constructor(clientRepository) {
        this.clientRepository = clientRepository
    }

    async execute(id) {
        const ok = await this.clientRepository.delete(id)
        if (!ok) {
            const e = new Error("Cliente não encontrado")
            e.status = 404
            throw e
        }
        return true
    }
}

module.exports = DeleteClient