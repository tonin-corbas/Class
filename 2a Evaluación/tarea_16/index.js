const express = require('express')
const app = express()
const port = 3000

const db = require('better-sqlite3')('WEB.sqlite')

app.use(express.json());

app.get('/usuarios', (req, res) => {
    const rows = db.prepare('SELECT * FROM Usuarios').all()
    res.json(rows)
})

app.get('/usuario', (req, res) => {
    const usuarioId = req.query.id;
    const row = db.prepare('SELECT * FROM Usuarios WHERE id = ?').get(usuarioId)
    res.json(row)
})

app.get('/productos', (req, res) => {
    const rows = db.prepare('SELECT * FROM Productos').all()
    res.json(rows)
})

app.get('/producto', (req, res) => {
    const productoId = req.query.id;
    const row = db.prepare('SELECT * FROM Productos WHERE id = ?').get(productoId)
    res.json(row)
})

app.get('/comandas', (req, res) => {
    const rows = db.prepare('SELECT Comandas.id, Usuarios.nombre as usuario, Productos.nombre as producto FROM Comandas JOIN Usuarios ON Comandas.usuario_id = Usuarios.id JOIN Productos ON Comandas.producto_id = Productos.id').all()
    res.json(rows)
})

app.get('/comanda', (req, res) => {
    const comandaId = req.query.id;
    const row = db.prepare('SELECT Comandas.id, Usuarios.nombre as usuari, Productos.nombre as producto FROM Comandas JOIN Usuarios ON Comandas.usuario_id = Usuarios.id JOIN Productos ON Comandas.producto_id = Productos.id WHERE Comandas.id = ?').get(comandaId)
    res.json(row)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})