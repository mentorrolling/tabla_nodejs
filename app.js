const { argv } = require('./yargs/yargs')
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const colors = require('colors');


let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        //console.log('crear')
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.brightGreen(archivo)} `))
            .catch(err => console.log(err))
        break;

    default:
        console.log('Comando no reconocido'.brightRed)
        break;
}