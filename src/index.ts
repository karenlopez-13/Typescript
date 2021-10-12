//Diseñar una función que permita luchar a 2 o n pokemones 
//y nos diga cual es el ganador después de una resta al ser afectado por los otros puntos de ataque

class Pelea{
    constructor(
    public nombre:string,
    public poder:string,
    public puntosDeAtaque:number,
    public puntosDeDefensa:number
    ){}
}

console.log("Nuestras luchadoras son: ", "Burbuja con el poder de la Super fuerza, Bombon con el poder de Aliento helado y Bellota con la Super fuerza con un aura de protección");

const chicasSP= [
    new Pelea("Burbuja", "Super fuerza", 50, 60),
    new Pelea("Bombon", "Aliento helado", 60, 70),
    new Pelea("Bellota", "Super fuerza con un aura de protección", 70, 100),
  ];

  function peleaa(chicas: Pelea[]): [string, number] {
    let ganadora: Pelea;
    let luchadoras = chicas.length;
    
    chicas.forEach((atacada) => {
      let danio = 0;
      for (let i = 0; i < luchadoras; i++) {
        if (chicas[i].nombre !== atacada.nombre) {
          danio += chicas[i].puntosDeAtaque;
        }
      }
      atacada.puntosDeDefensa -= danio;
    });
  
    chicas.forEach((chica) => {
      if (ganadora == null) {
        ganadora = chica;
      } else {
        if (ganadora.puntosDeDefensa < chica.puntosDeDefensa) {
          ganadora = chica;
        }
      }
    });

    return [ganadora.nombre, ganadora.puntosDeDefensa];
    
  }


  console.log('La ganadora es: ',peleaa(chicasSP));