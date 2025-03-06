const express = require('express');
const routerMedicos = express.Router();
const modelo = require("../modelo/medicoModelo.js");

routerMedicos.use(express.urlencoded({extended:true}));

// Ruta para listar medicos
routerMedicos.get('/', (req, res) => {
  const medicos=modelo.recuperaTodosLosMedicos(); 
  res.render('medicos/medicosLista', { medicos }); // Pasamos los medicos a la vista
});

//Ruta para alta médico
//GET --> mostrar la página de creación de médicos
routerMedicos.get('/alta', (req,res)=>{
  res.render('medicos/medicosAlta');
});

//POST --> Obtener los datos incorporados en la página de creación
routerMedicos.post('/alta', (req,res)=>{
  // Añadimos al médico al almacén
  // NIVEL 1:
  const medico = {nombre:req.body.nombre, apellido:req.body.apellido, especialidad:req.body.especialidad, experiencia:parseInt(req.body.experiencia), centro:req.body.centro};
  
  //--------------------------------------------------------------------------------------------------
  //NIVEL 2:
//   const medico = {apellido:req.body.apellido};
  modelo.altaMedico(medico);
  res.redirect("/medicos")
});

//Ruta para actualizar medicos

//GET --> Mostrar la vista de actualización

routerMedicos.get('/edita/:id', (req,res)=>{
  const idMedico = req.params.id;
  const medico = modelo.recuperaMedico(idMedico)
  res.render('medicos/medicosActualiza', {medico})
});

//POST --> Actualizar la información del médico
routerMedicos.post('/edita/:id',(req, res)=>{
  const idMedico = req.params.id;
  modelo.actualizaMedico(idMedico, req.body);
  res.redirect('/medicos');
});

//Ruta para eliminar medicos

routerMedicos.get('/baja/:id', (req, res)=>{
  const idMedico = req.params.id;
  modelo.bajaMedico(idMedico);
  res.redirect('/medicos');
});

// Ruta para recargar los médicos
routerMedicos.post("/recargar", (req, res) => {
  modelo.restablecerMedicos();
  res.status(200).send("Lista de médicos restablecida");
});


module.exports = routerMedicos;

