let empleados = [{
        id: 1,
        nombre: 'Brian'
    },
    {
        id: 2,
        nombre: 'juan'
    },
    {
        id: 3,
        nombre: 'Pedro'
    }

];

let salarios = [{
        id: 1,
        sueldo: '100'
    },
    {
        id: 2,
        sueldo: '200'
    }
];

let getempleado = async(id) => {

    let empleadoBD = empleados.find(empleado => empleado.id === id);
    if (!empleadoBD) {
        throw new Error(`El Usuario con ID: ${id} no existe`);

    } else {
        return empleadoBD;
    }

};

let getsalario = (empleado) => {

    let salariosBD = salarios.find(salario => salario.id === empleado.id);
    if (!salariosBD) {
        throw new Error(`No existe un salario para el usuario: ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            sueldo: salariosBD.sueldo,
            id: empleado.id
        };
    }

};

let getInformacion = async(id) => {
    let empleado = await getempleado(id);
    let res = await getsalario(empleado);
    return `El salario de ${res.nombre} es de ${res.sueldo}`;
}

getInformacion(1).then(mensaje => console.log(mensaje)).catch(err => console.log(err));