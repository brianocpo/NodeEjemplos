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
let getempleado = (id, callback) => {
    let empleadoBD = empleados.find(empleado => empleado.id === id);
    if (!empleadoBD) {
        callback(`El Usuario con ID: ${id} no existe`);
    } else {
        callback(null, empleadoBD);
    }
};
let getsalario = (empleado, callback) => {
    let salariosBD = salarios.find(salario => salario.id === empleado.id);
    if (!salariosBD) {
        callback(`El Usuario con ID: ${empleado.id} no existe`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            sueldo: salariosBD.sueldo,
            id: empleado.id
        });
    }
};


let idUsuario = 2;

getempleado(idUsuario, (error, empleado) => {
    if (error) {
        return console.log(error);
    }
    getsalario(empleado, (err, salario) => {
        if (err) {
            return console.log('No se encuentra un salario para el Empleado: ' + empleado.nombre);
        }
        console.log(salario);
    });

});