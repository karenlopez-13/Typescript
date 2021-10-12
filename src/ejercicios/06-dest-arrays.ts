//Destructuring arrays
const pokemon:string[]=['Pikachu', 'Charizard', 'Charmander'];

//PRIMER FORMA DE IMPRIMIRLO
// const[p1,p2,p3] = pokemon;
// console.log(p1);

//SEGUNDA FORMA DE IMPRIMIRLO
const[ , ,p3] = pokemon;
console.log(pokemon[1]);