//Parametros

//primera forma de hacerlo
/*function suma(a,b){
    return a+b;
}

console.log(suma("Karen",5)) //typescript siempre va a tratar de traducir a java script
console.log(suma(2,5)) //otra forma de hacerlo
*/

function suma(a:number, b:number):number {
    //return (a+b).toString(); //esto no se puede
    return a+b;
}

const resultado = suma(10,5);
console.log(resultado)

//Arrow function
const sumaFlecha=(a:number,b:number):number=>{
    return a+b;
}

//Parametros funcionales
function conversion(numero:number, otro_numero?:number, base:number=2):number{ //primero los parametros obligatorios, luego los opcionales y luego los predeterminados
    return numero*otro_numero*base;
}

const resultadoConversion = conversion(10,10);
console.log(resultadoConversion);

interface Pokemonn{
    nombre:string,
    puntosVida:number,
    mostrarPV:()=>void;
}

function curar(pokemon:Pokemonn,curarP):void{
    //return undefined; //en caso de no declalarlo como void
    pokemon.puntosVida += curarP;
    console.log(pokemon);
}

const nuevoPokemon: Pokemonn = {
    nombre: "Charmander",
    puntosVida: 50,
    //también podemos precargar las funciones
    mostrarPV(){
        console.log('Puntos de vida', this.puntosVida)
    }
}

curar(nuevoPokemon,20);
nuevoPokemon.mostrarPV();