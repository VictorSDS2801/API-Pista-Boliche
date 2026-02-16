const express = require("express")
const cors = require("cors")
const { errorHandler } = require("./infrastructure/http/middlewares/errorHandler")

const clientRoutes = require("./infrastructure/http/routes/clientRoutes")
const laneRoutes = require("./infrastructure/http/routes/laneRoutes")
const bookingRoutes = require("./infrastructure/http/routes/bookingRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.json({ message: "API Boowling funcionando"})
})

app.use("/clients", clientRoutes)
app.use("/lanes", laneRoutes)
app.use("/bookings", bookingRoutes)

app.use(errorHandler)

module.exports = app