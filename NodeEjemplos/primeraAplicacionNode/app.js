/**
 *Riquire, existen 3 tipos de require, los propios de NODE, modulos que se instalan
 *y los propios modulos que se desarrollan con el royecto
 */
// const fs = require('express');
const argv = require('yargs')
    .command('listar', 'Crea un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Crea un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;


const { crearTablaMultiplicacion, listarTablaMultiplicacion } = require('./multiplicar');

if (argv.base >= 0 && argv.limite >= 0 && argv.base !== true) {
    switch (comando) {
        case 'listar':
            listarTablaMultiplicacion(argv.base, argv.limite).then(tabla => console.log(tabla)).catch(err => console.log(err));
            break;
        case 'crear':
            crearTablaMultiplicacion(argv.base, argv.limite).then(mensaje => console.log(mensaje)).catch(err => console.log(err));
            break;
        default:
            console.log('Comando no reconocido');
    }
}