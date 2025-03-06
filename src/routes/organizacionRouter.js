const express = require('express');
const routerOrganizacion = express.Router();
const organizacionModelo = require('../modelo/organizationModelo');

routerOrganizacion.use(express.urlencoded({extended:true}));


routerOrganizacion.get('/', (req, res) => {
    const organizacion = organizacionModelo.recuperaTodaLaInfoOrg();
    const diccionario = {
        nombre: organizacion.name,
        telefono: organizacion.contact?.[0]?.telecom?.find((t) => t.system === "phone")?.value || "Teléfono no disponible",
        correo: organizacion.contact?.[0]?.telecom?.find((t) => t.system === "email")?.value || "Correo no disponible"
    }
    res.render('organizacion', { organizacion: diccionario});
});

module.exports = routerOrganizacion;
