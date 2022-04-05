//Desestructuracion de arreglos
const personajes = ['Goku','Vegueta','Trunks'];

//console.log( personajes[1] );

const [ p1 ] = personajes; //primer elemento
console.log( p1 );

const [ ,p2 ] = personajes; //segundo elemento
console.log( p2 );

const [ , , p3] = personajes; //tercer elemento
console.log( p3 );

const retortaArreglo = () => {
    return ['ABC',123];
}

const arr = retortaArreglo();
console.log( arr );

const [letras, numeros] = retortaArreglo();
console.log( letras, numeros );

//Tarea
const funcState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}

const arr2 = funcState( 'Goku' );

arr2[1](); //para retornar solo la funcion
//console.log( arr2 );

const [ nombre, setNombre ] = funcState('Sara');
console.log( nombre );
setNombre();

