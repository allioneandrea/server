const express = require("express")
const cors = require("cors")
const app = express()
const mysql = require("mysql")

const PUERTO = 3001
const BASE_URL = "https://server-xi-orpin.vercel.app"

app.use(cors())
app.use(express.json())
const conneURI = "mysql://u28o1t7bqutx2zvj:i9GAaE9mfjcEK3QFz9A4@bu4o4mfzvbviqqt3abkj-mysql.services.clever-cloud.com:3306/bu4o4mfzvbviqqt3abkj"

const db = mysql.createConnection({
    host: "bu4o4mfzvbviqqt3abkj-mysql.services.clever-cloud.com",
    user: "u28o1t7bqutx2zvj",
    password: "i9GAaE9mfjcEK3QFz9A4",
    database: "bu4o4mfzvbviqqt3abkj"

})


app.get('/api/horario', (req,res) => {

    db.query("SELECT * FROM horario ORDER BY inicio ASC", (err, result) => {
        res.send(result)
    })
    
})

app.post('/api/updatehorario',(req, res) => {
    const inicio = req.body.inicio
    const fin = req.body.fin
    const pedidos = req.body.pedidos
    const id = req.body.id
    console.log(req.body)
    db.query("UPDATE horario SET inicio=?, fin=?, pedidos=? WHERE id=?", [inicio, fin, pedidos, id], (err,result) => {
        db.query("SELECT * FROM horario", (err, results) => {
            res.send(results)
        })
    })
})

app.post('/api/deletehorario',(req, res) => {
    const id = req.body.id
    db.query("DELETE horario WHERE id=?", [ id], (err,result) => {
        db.query("SELECT * FROM horario", (err, results) => {
            res.send(results)
        })
    })
})
app.post('/api/inserthorario',(req, res) => {

    const fin = req.body.fin
    const pedidos = req.body.pedidos
    const inicio = req.body.inicio
    const id = req.body.id
    db.query("INSERT INTO horario(inicio, fin, pedidos) VALUES(?,?,?)", [inicio,fin, pedidos], (err,result) => {
        
        db.query("SELECT * FROM horario", (err, results) => {
            res.send(results)
        })
    })
})



app.listen(PUERTO, () => {
    console.log("escuchando en el puerto " + PUERTO)
})
