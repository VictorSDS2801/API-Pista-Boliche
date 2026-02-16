// src/domain/bookings/BookingRules.js

const ALLOWED_START_HOURS = [16, 18, 20, 22]

function isValidDateString(dateStr) {
  // formato simples YYYY-MM-DD
  if (typeof dateStr !== "string") return false
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return false

  // valida data real (ex: não deixar 2026-99-99)
  const [y, m, d] = dateStr.split("-").map(Number)
  const dt = new Date(Date.UTC(y, m - 1, d))
  return (
    dt.getUTCFullYear() === y &&
    dt.getUTCMonth() === m - 1 &&
    dt.getUTCDate() === d
  )
}

function validateBookingInput({ date, startHour }) {
  if (!isValidDateString(date)) {
    const e = new Error("date deve estar no formato YYYY-MM-DD e ser uma data válida")
    e.status = 400
    throw e
  }

  if (!Number.isInteger(startHour) || !ALLOWED_START_HOURS.includes(startHour)) {
    const e = new Error("startHour inválido. Use 16, 18, 20 ou 22")
    e.status = 400
    throw e
  }
}

function calculateEndHour(startHour) {
  // blocos fixos de 2 horas, 22 -> 0
  return (startHour + 2) % 24
}

module.exports = {
  ALLOWED_START_HOURS,
  validateBookingInput,
  calculateEndHour,
}
