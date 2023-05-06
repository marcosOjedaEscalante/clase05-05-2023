var persona = {
    rut: '11111111-1',
    nombre: 'Marcos',
    apellido: 'Ojeda',
    edad: 33
}

function Persona(rut, nombre, apellido, edad){
    this.rut = rut;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

console.log(persona.rut);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.probando);
persona.edad = 'Hola';
console.log(persona.edad);

/* var proxy = new Proxy(target, handler); */

var persona = new Proxy(persona, {
    get(target, prop){
        if(prop in target){
            return target[prop];
        }else{
            return `La propiedad ${prop} no existe`
        }
    },
    set(target, prop, val){
        /* if(prop === 'edad'){

        }else if(prop === 'nombre'){

        }else if(prop === 'apellido'){

        } */
        if(prop === 'edad'){
            if(typeof val === 'number'){
                target[prop] = val;
                return true;
            }else{
                return false;
            }
        }else{
            target[prop] = val;
            return true;
        }
    }
});

console.log(persona.rut);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.probando);
console.log(persona.probandoUno);
persona.edad = 'Holadfasdfaa';
console.log(persona.edad);
persona.edad = 55;
console.log(persona.edad);
persona.nombre = 'Antonio';
console.log(persona.nombre);