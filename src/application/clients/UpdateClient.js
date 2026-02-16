const Client = require("../../domain/clients/Client")

class UpdateClient {
  constructor(clientRepository) {
    this.clientRepository = clientRepository
  }

  async execute(id, input) {
    const current = await this.clientRepository.getById(id)

    if (!current) {
      const e = new Error("Cliente não encontrado")
      e.status = 404
      throw e
    }

    const merged = {
      name: input.name ?? current.name,
      email: input.email ?? current.email,
      phone: input.phone ?? current.phone,
    }

    const validated = new Client({ id, ...merged })

    return await this.clientRepository.update(id, {
      name: validated.name,
      email: validated.email,
      phone: validated.phone,
    })
  }
}

module.exports = UpdateClient
