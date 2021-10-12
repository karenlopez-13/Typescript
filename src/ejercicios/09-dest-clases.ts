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