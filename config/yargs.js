const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        describe:'Base de la operación',
        demandOption: true

    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        describe:'Listar tabla de operaciones',
        demandOption: false,
        default: false
    })
    .option('i',{
        alias:'intervalo',
        type:'number',
        describe:'Numero del intervalo',
        demandOption:false,
        default:10
    })
    .check((argv,option)=>{
        if( isNaN( argv.b) || isNaN( argv.i)){
            throw 'La base o el intervalo debe ser un numero entero';
        }
        return true;
    })
    .argv;

    module.exports = argv;