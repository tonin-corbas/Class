const express = require('express')
const app = express()
const port = 3000
const db = require('better-sqlite3')('BBDD.sqlite');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// home
app.get("/", (req, res) => {
  const rows = db.prepare('SELECT * from Usuarios').all();
  res.render("app", msgs = { msgs: rows })
})

// lista de usuarios
// no requiere parametros
app.get('/usuarios', (req, res) => {
  const rows = db.prepare('SELECT * from Usuarios').all();
  res.json(rows)
})

// ver un usuario en concreto
// debería usar query params
app.get('/usuario', (req, res) => {
  const usuarioId = req.query.id;
  const row = db.prepare('SELECT * FROM Usuarios WHERE id = ?').get(usuarioId)
  res.json(row);
})

// devuelve el formulario
// no requerie parametros
app.get("/addusuario", (req, res) => {
  res.render("formulario_usuarios");
})

//  añadir un nuevo usuario
// los parametros son parte del body (formulario)
app.post("/addusuario", (req, res) => {
  if (req.body) {
    if (req.body.nombre && req.body.email) {
      const statement = db.prepare('INSERT INTO Usuarios (nombre, email) VALUES (?,?)');
      const info = statement.run(req.body.nombre, req.body.email);
      console.log(info);
    }
  }
  res.redirect("addusuario");
})

// ver un producto en concreto
app.get('/producto', (req, res) => {
  const productoId = req.query.id;
  const row = db.prepare('SELECT * FROM Productos WHERE id = ?').get(productoId)
  res.json(row);
})

// lista de productos
app.get('/productos', (req, res) => {
  const rows = db.prepare('SELECT * from Productos').all();
  res.json(rows)
})

// ver el formulario para añadir un producto
app.get('/addproducto', (req, res) => {
  res.render("formularios_productos");
})

// añadir un nuevo producto
app.post("/addproducto", (req, res) => {

  if (req.body) {
    if (req.body.nombre && req.body.precio) {
      const statement = db.prepare('INSERT INTO Productos (nombre, precio) VALUES (?,?)');
      const info = statement.run(req.body.nombre, req.body.precio);
      console.log(info);
    }
  }
  res.redirect("addproducto");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})