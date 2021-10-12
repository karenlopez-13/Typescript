//Clases
//Las clases las vamos a utilizar para trabajar con nuestros objetos mientras que las interfaces son para el tipado

class Pokemon{
    static algo:string;
    constructor(
        public nombre:string,
        public habilidad:string,
        public pAtaque:number
    ){
    }
}

const pkm = new Pokemon('Pikachu', 'ImpacTrueno', 40);
console.log(pkm);

//Diseñar una función que permita luchar a 2 o n pokemones 
//y nos diga cual es el ganador después de una resta al ser afectado por los otros puntos de ataque