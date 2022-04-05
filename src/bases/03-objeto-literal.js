const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55231453,
        lat: 14.5435,
        lng: 34.542
    }
};

//console.table(persona);
console.log(persona);

//const persona2 = persona; //NO hacer esto
const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona2);
console.log(persona);