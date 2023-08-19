let agendaDeContactos = [];


function agregarContacto(id, nombre, apellido, edad, telefono, ciudad, direccion) {
    let contacto = {
        id: id,
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        telefono: telefono,
        ubicaciones: {
            ciudad: ciudad,
            direccion: direccion
        }
    };

    agendaDeContactos.push(contacto);
}


function borrarContacto(nombre) {
    agendaDeContactos = agendaDeContactos.filter(contacto => contacto.nombre !== nombre);
}


function imprimirContactos() {
    agendaDeContactos.forEach(contacto => {
        console.log("ID de contacto: " + contacto.id);
        console.log("Nombre completo: " + contacto.nombre + " " + contacto.apellido);
        console.log("Edad: " + contacto.edad)
        console.log("Telefono de contacto: " + contacto.telefono)
        console.log("la ciudad del contacto: " + contacto.ubicaciones.ciudad + "," + " y la direccion es: " + contacto.ubicaciones.direccion)
    }
    )
}


agregarContacto(10001, "Arya", "Stark", 20, 5850046, "winterfell", "En el norte");
agregarContacto(10026, "Jon", "Snow", 28, 5850047, "winterfell", "En el norte");
agregarContacto(10027, "Sansa", "Stark", 23, 5850048, "winterfell", "En el norte");
agregarContacto(10028, "Brandon", "Stark", 18, 5850049, "winterfell", "En el norte");
agregarContacto(10029, "Daenerys", "Targaryen", 29, 5852550, "DragonStone", "Irlandia");
borrarContacto("Brandon");
imprimirContactos();
