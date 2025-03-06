const express = require('express');
const router = express.Router();

// Importamos las rutas de pacientes y médicos
const pacientesRouter = require('./pacientesRouter');
const medicosRouter = require('./medicosRouter');
const organizacionRouter = require('./organizacionRouter')

// Ruta de inicio
router.get('/', (req, res) => {
  res.render('inicio'); // Se renderiza la vista 'inicio.ejs'
});

// Montamos las rutas para pacientes y médicos
router.use('/pacientes', pacientesRouter);
router.use('/medicos', medicosRouter);
router.use('/organizacion', organizacionRouter);

// Ruta para manejar 404 (cuando no se encuentra la página)
router.all('*', (req, res) => {
  res.status(404);
  res.render('/inicio', {mensaje:'Página no encontrada'});
});



module.exports = router;
