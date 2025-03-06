//NIVEL1:
let medicos = require("../data/medicos.js");
const crypto = require("crypto");

//Lógica de negocio

//Función listar medicos 

const medicoModelo = {
    recuperaTodosLosMedicos(){
        return medicos;
    },

    altaMedico(datosMedico){
         //para añadir un id:
        const id=crypto.randomUUID();
        datosMedico["id"]=id;
        medicos.push(datosMedico);
    },

    //Función para la actualización
    recuperaIndexMedico(id){
        const index = medicos.findIndex((e)=>{
            return e.id === id;
        })
        return index;
    },

    recuperaMedico(id){
        let medico = null;

        const index = medicos.findIndex((e)=>{
            return e.id == id;
        });

        if(index>=0){
            medico=medicos[index]//tenemos un array de medico 
            //index hace referencia a la posición en el array que ocupa el medico
        }else{
            console.log("Médico no encontrado");
        }
        return medico;
    },

    actualizaMedico(id, datosMedico){

        const idx = this.recuperaIndexMedico(id);

        if(idx>=0){
            medicos[idx]={id, ...datosMedico};//los 3 . sirven para concatenar la info que se obtiene con idMedico con la que se obtiene recopilada de pantalla
        }
    },

    bajaMedico(id){
        medicos=medicos.filter((e)=>{
            return e.id!=id;
        });
    },

    restablecerMedicos() {
        delete require.cache[require.resolve("../data/medicos.js")]; // Recargar el archivo original
        medicos = require("../data/medicos.js");
    }
    


};

module.exports=medicoModelo;



//------------------------------------------------------------
//NIVEL 2:

// let medicos = require("../data/practitioner");
// const crypto = require("crypto");

// // Lógica de negocio

// const medicoModelo = {
//     // Función listar médicos
//     recuperaTodosLosMedicos() {
//         return medicos.map((practitioner) => {
//             return {
//                 id: practitioner.identifier[0].value,
//                 apellido: practitioner.name[0].family
//             };
//         });
//     },

//     // Alta de un nuevo médico
//     altaMedico(datosMedico) {
//         // Para añadir un id:
//         const id = crypto.randomUUID();
//         const nuevoMedico = {
//             resourceType: "Practitioner",
//             identifier: [{value: id }],
//             active: true,
//             name: [{ use: "official", family: datosMedico.apellido }]
//         };
//         medicos.push(nuevoMedico);
//     },

//     // Función para la actualización: recuperar índice
//     recuperaIndexMedico(id) {
//         const index = medicos.findIndex((practitioner) => {
//             return practitioner.identifier[0].value === id;
//         });
//         return index;
//     },

//     // Recuperar un médico específico
//     recuperaMedico(id) {
//         let medico = null;

//         const index = this.recuperaIndexMedico(id);

//         if (index >= 0) {
//             const practitioner = medicos[index];
//             medico = {
//                 id: practitioner.identifier[0].value,
//                 apellido: practitioner.name[0].family
//             };
//         } else {
//             console.log("Médico no encontrado");
//         }
//         return medico;
//     },

//     // Actualizar un médico existente
//     actualizaMedico(id, datosMedico) {
//         const idx = this.recuperaIndexMedico(id);

//         if (idx >= 0) {
//             medicos[idx].name[0].family = datosMedico.apellido; // Solo actualiza el apellido
//         }
//     },

//     // Eliminar un médico
//     bajaMedico(id) {
//         medicos = medicos.filter((e) => {
//             return e.identifier[0].value !== id;
//         });
//     }
// };

// module.exports = medicoModelo;