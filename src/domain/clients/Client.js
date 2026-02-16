class Client {
    constructor({ id = null, name, email = null, phone = null }) {
        if (!name || typeof name !== "string" || name.trim().length < 2) {
            const e = new Error("Nome do client é obrigatório e deve ser pelomenos 2 caracteres")
            e.status = 400
            throw e
        }

        if (email && typeof email !== "string"){
            const e = new Error("Email inválido")
            e.status = 400
            throw e
        }
        
        if (phone && typeof phone !== "string") {
            const e = new Error("Telefone inválido")
            e.status = 400
            throw e
        }

        this.id = id
        this.name = name.trim()
        this.email = email ? email.trim() : null
        this.phone = phone ? phone.trim() : null
    }
}

module.exports = Client