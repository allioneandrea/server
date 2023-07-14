const express = require("express")
const cors = require("cors")
const mysql = require("mysql")

const PORT = 3001

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req,res) => {
    res.send({"inicio": "inicio"})
})

app.listen(PORT, () => {
    console.log('escuchando en el puerto: '+PORT)
})