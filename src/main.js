const app = require("./app")
const env = require("./config/env")
const { connectDb } = require("./config/db")

async function bootstrap() {
    await connectDb()
    
    app.listen(env.PORT, () => {
        console.log(`Servidor rodando na porta ${env.PORT}`)
    })
}

bootstrap().catch((err) => {
    console.error("Falha ao iniciar a aplicação:", err)
    process.exit(1)
})