let persona = {
    nombre: 'Brian',
    apellido: 'Montengro',
    poder: 'Brian',
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
};

let { nombre: nom, apellido, poder } = persona;
console.log(nom, apellido, poder);