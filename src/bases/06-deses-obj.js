//Asignacion Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

const { nombre, edad, clave } = persona;
//const { nombre:nombre2 } = persona;

//console.log( nombre );
//console.log( edad );
//console.log( clave );
//console.log( persona.edad );
//console.log( persona.clave );
/*const retornaPersona = ( usuario ) => {
    const {edad, clave, nombre } = usuario;
    console.log(edad, clave, nombre);
}*/

const Context = ( { nombre,edad,rango = 'Capitan' } ) => {
    //console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.3424,
            lng: -12.424
        }
    }
}


const {nombreClave,anios,latlng:{lat,lng}} = Context( persona );
console.log( nombreClave,anios );
console.log(lat,lng);