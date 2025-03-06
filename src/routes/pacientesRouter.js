const express = require('express');
const routerPacientes = express.Router();
const modelo = require("../modelo/pacienteModelo.js");

routerPacientes.use(express.urlencoded({extended:true}));

// Ruta para listar pacientes
routerPacientes.get('/', (req, res) => {
  const pacientes=modelo.recuperaTodosLosPacientes(); 
  res.render('pacientes/pacientesLista', { pacientes }); // Pasamos los pacientes a la vista
});

//Ruta para alta paciente 

//GET --> mostrar la página de creación de pacientes
routerPacientes.get('/alta', (req,res)=>{
  res.render('pacientes/pacientesAlta'); 
});

//POST --> Obtener los datos incorporados en la página de creación
routerPacientes.post('/alta', (req,res)=>{
  // Añadimos al paciente al almacén

  //PARA NIVEL 1:
  const paciente = {nombre:req.body.nombre, apellido:req.body.apellido, edad:parseInt(req.body.edad), genero:req.body.genero, direccion:req.body.direccion, patologia:req.body.patologia};

  //--------------------------------------------------------------------------------------------------------
  //PARA NIVEL 3:
  // const paciente = {apellido:req.body.apellido, fecha: req.body.fecha, genero: req.body.genero};
  modelo.altaPaciente(paciente);
  res.redirect("/pacientes")
});

//Ruta para actualizar pacientes

//GET --> Mostrar la vista de actualización

routerPacientes.get('/edita/:id', (req,res)=>{
  const idPaciente = req.params.id;
  const paciente = modelo.recuperaPaciente(idPaciente)
  res.render('pacientes/pacientesActualiza', {paciente})
});

//POST --> Actualizar la información del paciente
routerPacientes.post('/edita/:id',(req, res)=>{
  const idPaciente = req.params.id;
  modelo.actualizaPaciente(idPaciente, req.body);
  res.redirect('/pacientes');
});


//Ruta para eliminar pencientes

routerPacientes.get('/baja/:id', (req, res)=>{
  const idPaciente = req.params.id;
  modelo.bajaPaciente(idPaciente);
  res.redirect('/pacientes');
});

routerPacientes.post("/recargar", (req, res) => {
  modelo.restablecerPacientes();
  res.status(200).send("Lista de pacientes restablecida");
});



module.exports = routerPacientes;
