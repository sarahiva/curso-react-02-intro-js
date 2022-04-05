import { getHeroeById } from "./bases/08-imp-exp";
//Promesas
/*const promesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
        //Tarea
        const heroe = getHeroeById(2);
        resolve(heroe);
        //reject('No se puedo encontrar el heroe');
    }, 2000);
} );

promesa.then( ( heroe ) => {
    console.log('heroe', heroe);
} )
.catch( err => console.error(err));*/

const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            //Tarea
            const heroe = getHeroeById(id);
            ( heroe ) ? resolve(heroe) : reject('No se puedo encontrar el heroe');
        }, 2000);
    } );
}

getHeroeByIdAsync(1)
.then( console.log)
.catch(console.error);