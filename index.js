const express = require("express")
const cors = require("cors")
const mysql = require("mysql")

const PORT = 3001

const app = express()

app.use(cors())
app.use(express.json())


const db = mysql.createConnection({
    host: "bu4o4mfzvbviqqt3abkj-mysql.services.clever-cloud.com",
    user: "u28o1t7bqutx2zvj",
    password: "i9GAaE9mfjcEK3QFz9A4",
    database: "bu4o4mfzvbviqqt3abkj"

})

app.get("/", (req,res) => {
    res.send({"inicio": "inicio"})
})


app.get('/api/horario', (req,res) => {

    db.query("SELECT * FROM horario ORDER BY inicio ASC", (err, result) => {
        res.send(result)
    })
    
})

app.listen(PORT, () => {
    console.log('escuchando en el puerto: '+PORT)
})