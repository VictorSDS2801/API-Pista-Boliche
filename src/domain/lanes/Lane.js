class Lane {
    constructor({ id = null, name, isActive = true }) {
        if (!name || typeof name !== "string" || name.trim().length <  2) {
            const e = new Error("Nome da pista é obrigatório de deve ter pelo menos 2 caracteres")
            e.status = 400
            throw e
        }

        if (typeof isActive !== "boolean") {
            const e = new Error("isActive deve ser boolean")
            e.status = 400
            throw e
        }

        this.id = id
        this.name = name.trim()
        this.isActive = isActive
    }
}

module.exports = Lane