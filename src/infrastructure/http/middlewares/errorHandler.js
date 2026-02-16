function errorHandler(err, req, res, next) {
    const status = err.status || 500
    const message = err.message || "Error interno no servidor"

    console.error("Erro:", err.message)

    res.status(status).json({ error: message })
}

module.exports = { errorHandler }