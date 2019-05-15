function sumar(a, b) {
    return a + b;
}
//console.log(sumar(10, 30));

let sumar2 = (a, b) => a + b;
//console.log(sumar2(10, 30));

let persona = {
    nombre: 'Brian',
    apellido: 'Montengro',
    poder: 'Brian',
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
};

let persona2 = (nombre, apellido, poder) => {
    return `Mi nombre es: ${nombre} ${apellido} y mi poder es: ${poder}`;
};
console.log(persona2('Brian', 'Montenegro', 'Programador'));