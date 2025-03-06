//NIVEL 1:

let pacientes = require("../data/pacientes.js");
const crypto = require("crypto");

//Lógica de negocio

//Función listar pacientes 

const pacienteModelo = {
    
    recuperaTodosLosPacientes(){
        return pacientes;
    },

    altaPaciente(datosPaciente){
        //para añadir un id:
        const id=crypto.randomUUID();
        datosPaciente["id"]=id;
        pacientes.push(datosPaciente);
    },

    //Función para la actualización
    recuperaIndexPaciente(id){ //recupera la posición en la que está el paciente
        const index = pacientes.findIndex((e)=>{
            return e.id === id; 
        })
        return index;
    },

    recuperaPaciente(id){ //recupera el paciente que está en una determinada posición
        let panciente = null; 

        const index = pacientes.findIndex((e) =>{
            return e.id === id;
        });

        if(index>=0){
            paciente=pacientes[index] //tenemos un array de paciente 
            //index hace referencia a la posición en el array que ocupa el paciente
        }else{
            console.log("Paciente no encontrado");
        }
        return paciente;
    },

    actualizaPaciente(id, datosPaciente){
        const idx = this.recuperaIndexPaciente(id);

        if(idx>=0){
            pacientes[idx]={id, ...datosPaciente}; //los 3 . sirven para concatenar la info que se obtiene con idPaciente con la que se obtiene recopilada de pantalla
        }
    },

    bajaPaciente(id){
        pacientes=pacientes.filter((e)=>{
            return e.id!=id; 
        });
    },

    restablecerPacientes() {
        delete require.cache[require.resolve("../data/pacientes.js")]; // Recargar el archivo original
        pacientes = require("../data/pacientes.js");
      }
};

module.exports=pacienteModelo;

//-------------------------------------------------------
//NIVEL 3:
// let pacientes = require("../data/patient");
// const crypto = require("crypto");

// //Lógica de negocio

// //Función listar pacientes 

// const pacienteModelo = {
    
//     recuperaTodosLosPacientes(){
//         return pacientes.map((e) => {
//             return {
//                 id:e.identifier[0].value,
//                 apellido: e.name[0].family,
//                 fecha: e.birthDate,
//                 genero: e.gender
//             }
//         });
//     },

//     altaPaciente(datosPaciente){
//         //para añadir un id:
//         const id=crypto.randomUUID();
//         const nuevoPaciente = {
//             resourceType: "Patient",
//             identifier: [{ value: id }],
//             active: true,
//             name: [{ use: "official", family: datosPaciente.apellido }],
//             birthDate: datosPaciente.fecha, gender: datosPaciente.genero
//         };
//         pacientes.push(nuevoPaciente);
//     },

//     //Función para la actualización
//     recuperaIndexPaciente(id){ //recupera la posición en la que está el paciente
//         const index = pacientes.findIndex((e)=>{
//             return e.identifier[0].value === id; 
//         })
//         return index;
//     },

//     recuperaPaciente(id){ //recupera el paciente que está en una determinada posición
//         let panciente = null; 

//         const index = this.recuperaIndexPaciente(id);

//         if(index>=0){
//             const patient = pacientes[index];
//             paciente = {
//                 id: patient.identifier[0].value,
//                 apellido: patient.name[0].family,
//                 fecha: patient.birthDate,
//                 genero: patient.gender
//             };
//         }else{
//             console.log("Paciente no encontrado");
//         }
//         return paciente;
//     },

//     actualizaPaciente(id, datosPaciente){
//         const idx = this.recuperaIndexPaciente(id);

//         if(idx>=0){
//             pacientes[idx].name[0].family = datosPaciente.apellido,
//             pacientes[idx].birthDate[0] = datosPaciente.fecha,
//             pacientes[idx].gender = datosPaciente.genero;
//         }
//     },

//     bajaPaciente(id){
//         pacientes=pacientes.filter((e)=>{
//             return e.identifier[0].value !== id; 
//         });
//     }
// };

// module.exports=pacienteModelo;