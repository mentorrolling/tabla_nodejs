//https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_file_system
const fs = require('fs'); //importo filesystem de NOde
const colors = require('colors');

// const crearArchivo = async(base) => {

//     let data = ''
//     for (let i = 1; i <= 10; i++) {

//         data += `${base} x ${i} = ${base * i}\n`
//     }

//     fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//         if (err) throw err


//     });

//     return `tabla-${base}.txt`;

// }

const listarTabla = (base, limite) => {
    console.log('========================='.brightGreen)
    console.log(`       Tabla del ${base}      `.brightGreen)
    console.log('========================='.brightGreen)
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base*i}\n`.brightGreen)
    }

}

const crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`.brightRed)
            return;
        }
        let data = ''
        for (let i = 1; i <= limite; i++) {

            data += `${base} x ${i} = ${base * i}\n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)


        });


    })
}

module.exports = {
    crearArchivo,
    listarTabla
}