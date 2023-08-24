let agendaDeContactos = [
    {
        id: 10,
        nombre: "John",
        apellido: "Snow",
        edad: 25,
        telefono: 5049523658,
        ubicaciones: {
            ciudad: "Winterfell",
            direccion: "Norte",
        }
    },

    {
        id: 11,
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 29,
        telefono: 5049523658,
        ubicaciones: {
            ciudad: "DragonStone",
            direccion: "Poniente",
        }
    },

    {
        id: 12,
        nombre: "Arya",
        apellido: "Stark",
        edad: 17,
        telefono: 5049523658,
        ubicaciones: {
            ciudad: "Winterfell",
            direccion: "Norte",
        }
    }

];



function agregarContacto(nuevoContacto) {
    agendaDeContactos.push(nuevoContacto);
}

let contactoNuevo = {
    id: 13,
    nombre: "Sansa",
    apellido: "Stark",
    edad: 20,
    telefono: 50492368520,
    ubicaciones: {
        ciudad: "KingsLanding",
        direccion: "East Coast",
    }
}


function borrarContacto(nombre) {
    agendaDeContactos = agendaDeContactos.filter(contacto => contacto.nombre !== nombre)
}


function actualizarEdadContacto(objeto, nombreContacto, nuevaEdad) {
    let index = objeto.findIndex(function (contacto) {
        return contacto.nombre === nombreContacto;
    });

    if (index !== -1) {
        objeto[index].edad = nuevaEdad;
    }
}

function imprimirContactos() {
    console.log(agendaDeContactos);
}



agregarContacto(contactoNuevo);
borrarContacto("John");
actualizarEdadContacto(agendaDeContactos)
imprimirContactos();