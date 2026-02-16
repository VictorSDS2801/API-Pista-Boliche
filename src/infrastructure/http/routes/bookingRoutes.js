// src/infrastructure/http/routes/bookingRoutes.js
const express = require("express")
const controller = require("../controllers/bookingController")

const router = express.Router()

router.post("/", controller.create)
router.get("/", controller.list)
router.delete("/:id", controller.remove)

module.exports = router
