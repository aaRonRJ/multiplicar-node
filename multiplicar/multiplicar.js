// Requireds
const fileSystem = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fileSystem.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) reject(err);

            resolve(`tabla-${ base }.txt`);
        });
    });
};

let listarTabla = (base, limite) => {
    let data = '';
    console.log('==================='.green);
    console.log(`Tabla del ${ base }`.green);
    console.log('==================='.green);

    for (let i = 1; i <= limite; i++) {
        data += `${ base } * ${ i } = ${ base * i }\n`;
    }

    console.log(data);
}

module.exports = {
    crearArchivo,
    listarTabla
};