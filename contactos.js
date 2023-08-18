let contactos = ["Mario Fernandez", "Luis Mondragon", "Maria Calderon", "Pedro Zapata", "Luisa Espinal", "Emily Bermudez"];


function agregar(contacto) {
    contactos.push(contacto);
}

function borrarContacto(borrar) {
    contactos = contactos.filter(nombre => nombre !== borrar);
}

function imprimir() {
    contactos.forEach(function (contacto) {
        console.log(contacto);
    });
}


agregar("Marisol Villanueva");
borrarContacto("Maria Benitez");
imprimir();


