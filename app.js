const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./multiplicar/config/yargs');
const colors = require('colors');

let command = argv._[0];

switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo ${ archivo } creado`.green))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}