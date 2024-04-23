const express = require('express')
const app = express()
const port = 3000

const db = require('better-sqlite3') ('personas.sqlite')

// creamos la configuración de la bbdd

app.use(express.json());

app.get('/patata', (req, res) => {
    res.send('Hello World!')
})

app.get('/personas', (req, res) => {
    // aqui hare el select
    resultadoselect = "SELECT * from personas"
    const rows = db.prepare(resultadoselect).all()
    res.json(rows)
})

app.get('/persona', (req, res) => {
    // aqui hare el select
    personaId = req.query.id;
    const row = db.prepare('SELECT * FROM personas WHERE id = ?').get(personaId)
    console.log(row);
    res.json(row)
})

app.post("/persona", (req, res) => {
    personaId = req.body.id;
    const row = db.prepare('SELECT * FROM personas WHERE id = ?').get(personaId)
    res.json(row)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})