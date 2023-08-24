let listaDeContactos = [
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
    listaDeContactos.push(nuevoContacto);
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
    listaDeContactos = listaDeContactos.filter(contacto => contacto.nombre !== nombre)
}


function imprimirContactos() {
    console.log(listaDeContactos);
}


agregarContacto(contactoNuevo);
borrarContacto();
imprimirContactos();
