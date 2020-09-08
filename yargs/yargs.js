let parametros = {
    base: {
        demand: true, //requerido
        alias: 'b' //para usar -b
    },
    limite: {
        alias: 'l',
        default: 10 //valor por defecto si no lo mando
    }
}
const argv = require('yargs')
    .command('listar', 'Muestra la tabla de multiplicar en pantalla', parametros)
    .command('crear', 'Crea un archivo txt con la tabla', parametros)
    .help()
    .argv

module.exports = {
    argv
}