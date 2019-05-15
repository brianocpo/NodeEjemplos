let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Brian');
        }, 3000);
    });
}

let getSaludo = async() => {
    let nombre = await getNombre();
    return (`Hola ${nombre}`);
}

getSaludo().then(res => {
    console.log(res);
});

console.log("Nueva tarea");