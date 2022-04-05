
const saludar = function(nombre) {
    return `Hola, ${ nombre }`;
}

const saludar2 = (nombre) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = (nombre) => `Hola, ${ nombre }`;

console.log( saludar3('Sara') );

const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
});

console.log(getUser());

const getUserioActivo = ( nombre ) => ({
        uid: 'ABC567',
        username: nombre
});

const usuarioActivo = getUserioActivo('Sara');
console.log(usuarioActivo);