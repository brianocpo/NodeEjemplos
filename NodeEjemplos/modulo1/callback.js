let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Carmen',
        id
    }
    if (id === 20) {
        callback('El Usuario no existe', usuario);
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(10, (error, usuario) => {
    if (error) {
        return console.log(`Error: ${error}`);
    }
    console.log(usuario);
});