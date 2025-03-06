const express = require('express');
const path = require('path');
const app = express();
const port = 3005;

// Establecer EJS como motor de plantillas
app.set('view engine', 'ejs');

// Establecer la carpeta de vistas
app.set('views', path.join(__dirname, 'views', 'pages'));

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
const indexRouter = require('./routes/indexRouter');
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});



