//Variables y Constantes
//let - variable de scope/ambito
const nombre = 'Sara';
const apellido = 'Vazquez';

let valorDado = 5;
valorDado = 4;
console.log(nombre,apellido,valorDado);

//var NO se debe de usar...
if(true){
    let valorDado = 6;
    const nombre = 'Peter';
    console.log(valorDado, nombre);
}

console.log(valorDado, nombre);

