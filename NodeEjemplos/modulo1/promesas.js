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

let getempleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoBD = empleados.find(empleado => empleado.id === id);
        if (!empleadoBD) {
            reject(`El Usuario con ID: ${id} no existe`);
        } else {
            resolve(empleadoBD);
        }
    });
};

let getsalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salariosBD = salarios.find(salario => salario.id === empleado.id);
        if (!salariosBD) {
            reject(`No existe un salario para el usuario: ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                sueldo: salariosBD.sueldo,
                id: empleado.id
            });
        }
    });
};

getempleado(10).then(empleado => {
    return getsalario(empleado)
}).then(res => {
    console.log(`El salario de ${res.nombre} es de : $${res.sueldo} `);
}).catch(err => {
    console.log(err);
});