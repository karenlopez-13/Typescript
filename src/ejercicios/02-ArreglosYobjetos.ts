//Arreglos
//let tecnologias:(boolean|string|number)[]=['JS','C',100]
//let tecnologias = ['TS', 'dotnet', 'java', 10, true]
//tecnologias.push(1)

let tecnologias:string []=['JS', 'TS', 'C'];
interface Persona{
    nombre:string;
    tecnologias:string[];
    edad:number;
    origen?:string; //parametro opcional al poner el signo de interroación
}

const persona:Persona = {
    nombre:'Karen',
    tecnologias: ['JS', 'TS', 'C'],
    edad: 21,
    // direccion:{ //objeto
    //     ciudad:
    //     estado:
    // }
}

persona.origen= 'León';
console.table(persona);