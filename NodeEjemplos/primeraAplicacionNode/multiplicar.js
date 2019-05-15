const fs = require('fs');

let TablaMultiplicar = async(base, limite) => {
    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base*i} \n`;
    }
    fs.writeFile(`tabla-${base}.txt`, data, (err) => {
        if (err) throw err;
    });
    return {
        data,
        nombrearchivo: `El archivo tabla-${base}.txt fue creado`
    }
}


let crearTablaMultiplicacion = async(base, limite) => {

    if (base <= 0) {
        throw new Error('Ingrese una base mayor a 0');
    } else {
        let { nombrearchivo } = await TablaMultiplicar(base, limite);
        return nombrearchivo;
    }
}

let listarTablaMultiplicacion = async(base, limite) => {
    if (base <= 0) {
        throw new Error('Ingrese una base mayor a 0');
    } else {
        let { data } = await TablaMultiplicar(base, limite);
        return data;
    }
}

//crearTablaMultiplicacion(0, 1).then(mensaje => console.log(mensaje)).catch(err => console.log(err));
module.exports = {
    crearTablaMultiplicacion,
    listarTablaMultiplicacion
}