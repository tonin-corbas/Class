const express = require('express');
const app = express();
const port = 3000;
const db = require('better-sqlite3')('BBDD.sqlite');

app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// home
app.get("/", (req, res) => {
  const rows = db.prepare('SELECT * from Usuarios').all();
  res.render("app", { msgs: rows });
});

// lista de usuarios
app.get('/usuarios', (req, res) => {
  const rows = db.prepare('SELECT * from Usuarios').all();
  res.json(rows);
});

// Ver listado en formato html de los usuarios
app.get('/verUsuarios', (req, res) => {
  const rows = db.prepare('SELECT * FROM Usuarios').all();
  res.render("verUsuarios", { usuarios: rows });
});

// ver un usuario en concreto
app.get('/usuario', (req, res) => {
  const usuarioId = req.query.id;
  const row = db.prepare('SELECT * FROM Usuarios WHERE id = ?').get(usuarioId);
  res.json(row);
});

// devuelve el formulario
app.get("/addusuario", (req, res) => {
  res.render("formulario_usuarios");
});

// añadir un nuevo usuario
app.post("/addusuario", (req, res) => {
  if (req.body) {
    if (req.body.nombre && req.body.email) {
      const statement = db.prepare('INSERT INTO Usuarios (nombre, email) VALUES (?, ?)');
      const info = statement.run(req.body.nombre, req.body.email);
      console.log(info);
    }
  }
  res.redirect("addusuario");
});

// ver un producto en concreto
app.get('/producto', (req, res) => {
  const productoId = req.query.id;
  const row = db.prepare('SELECT * FROM Productos WHERE id = ?').get(productoId);
  res.json(row);
});

// Ver listado de la base de datos de productos en formato html
app.get('/verProductos', (req, res) => {
  const rows = db.prepare('SELECT * FROM Productos').all();
  res.render("verProductos", { productos: rows });
});


// lista de productos
app.get('/productos', (req, res) => {
  const rows = db.prepare('SELECT * from Productos').all();
  res.json(rows);
});

// ver el formulario para añadir un producto
app.get('/addproducto', (req, res) => {
  res.render("formulario_productos");
});

// añadir un nuevo producto
app.post("/addproducto", (req, res) => {
  if (req.body) {
    if (req.body.nombre && req.body.precio) {
      const statement = db.prepare('INSERT INTO Productos (nombre, precio) VALUES (?, ?)');
      const info = statement.run(req.body.nombre, req.body.precio);
      console.log(info);
    }
  }
  res.redirect("addproducto");
});

// ver el formulario para añadir una comanda
app.get('/addcomanda', (req, res) => {
  const rowsProductos = db.prepare('SELECT * FROM Productos').all();
  const rowsUsuarios = db.prepare('SELECT * FROM Usuarios').all();
  res.render('formulario_comandas', { usuarios: rowsUsuarios, productos: rowsProductos });
});

// Añadir una comanda
app.post('/addcomanda', (req, res) => {
  if (req.body.Usuario_id && req.body.Producto_id) {
    const statement = db.prepare('INSERT INTO Comandas (Usuario_id, Producto_id) VALUES (?, ?)');
    const info = statement.run(req.body.Usuario_id, req.body.Producto_id);
    console.log(info);
    res.redirect('/verComandas');
  } else {
    res.redirect('/addcomanda');
  }
});

// Métodos para actualizar a los usuarios
app.get('/usuariosUpdate', (req, res) => {
  const proporcionado = req.query.id;
  const statement = db.prepare('SELECT * FROM Usuarios WHERE id = ?').get(proporcionado);
  res.render('usuariosUpdate', { usuario: statement });
});

app.post('/usuariosaUpdate', (req, res) => {
  try {
    const statement = db.prepare('UPDATE Usuarios SET Nombre = ?, Email = ? WHERE id = ?');
    const info = statement.run(req.body.Nombre, req.body.Email, req.body.ID);
    res.redirect('/verUsuarios');
  } catch (SqliteError) {
    console.error(SqliteError);
    res.send('Error al actualizar el usuario');
  }
});

// Métodos para actualizar los productos
app.get('/productosUpdate', (req, res) => {
  const proporcionado = req.query.ID;
  const statement = db.prepare('SELECT * FROM Productos WHERE ID = ?').get(proporcionado);
  res.render('productosUpdate', { producto: statement });
});

app.post('/productosUpdate', (req, res) => {
  try {
    const statement = db.prepare('UPDATE Productos SET nombre = ?, precio = ? WHERE id = ?');
    const info = statement.run(req.body.nombre, req.body.precio, req.body.id);
    res.redirect("/verProductos");
  } catch (error) {
    console.error(error);
  }
});

// Actualizar comandas
app.get('/comandasUpdate', (req, res) => {
  const proporcionado = req.query.ID;
  const comandas = db.prepare(`
    SELECT Comandas.id, Usuarios.nombre AS Nombre_Usuario, Productos.nombre AS Nombre_Producto
    FROM Comandas
    JOIN Usuarios ON Comandas.Usuario_id = Usuarios.id
    JOIN Productos ON Comandas.Producto_id = Productos.id
    WHERE Comandas.id = ?
  `).get(proporcionado);
  if (comandas) {
    const rowsProduct = db.prepare('SELECT * FROM Productos').all();
    const rowsPersona = db.prepare('SELECT * FROM Usuarios').all();
    res.render('comandasUpdate', { comanda: comandas, personas: rowsPersona, productos: rowsProduct });
  } else {
    res.send('No se encontró ninguna comanda con el ID proporcionado.');
  }
});

app.post('/comandasUpdate', (req, res) => {
  try {
    const statement = db.prepare('UPDATE Comandas SET Usuario_id = ?, Producto_id = ? WHERE id = ?');
    const info = statement.run(req.body.Usuario_id, req.body.Producto_id, req.body.id);
    res.redirect("/verComandas");
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
