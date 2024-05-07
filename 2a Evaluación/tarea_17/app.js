const express = require('express')
const app = express()
const port = 3000
const db = require('better-sqlite3')('BBDD.sqlite');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const rows = db.prepare('SELECT * from Usuarios').all();
  res.render("index", msgs = { msgs: rows })
})

app.get('/usuarios', (req, res) => {
  const rows = db.prepare('SELECT * from Usuarios').all();
  res.json(rows)
})

app.get('/usuario', (req, res) => {
  res.render("usuario");
})

app.post("/usuario", (req, res) => {
  if (req.body) {
    if (req.body.nombre && req.body.email) {
      const statement = db.prepare('INSERT INTO Usuarios (nombre, email) VALUES (?,?)')
      const info = statement.run(req.body.nombre, req.body.email)
    }
  }
  res.redirect("usuario");
})

app.get('/productos', (req, res) => {
  const rows = db.prepare('SELECT * from Productos').all();
  res.json(rows)
})

app.get('/producto', (req, res) => {
  res.render("producto");
})

app.post("/producto", (req, res) => {
  try {
    if (req.body.nom && req.body.preu) {
      const statement = db.prepare('INSERT INTO Productos (nom, preu) VALUES (?,?)')
      const info = statement.run(req.body.nom, req.body.preu)
    }
    res.redirect("producto");
  } catch (SqliteError) {
    res.redirect("producto");
  }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})