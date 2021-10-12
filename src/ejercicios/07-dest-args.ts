
export interface Producto{
    //A una interface se le conoce como "clase tonta" y no llevan meotodos como "private", etc.
    //nos sirve para empezar a dar forma
    desc:string;
    precio:number;
}

//Primer producto
const telefono:Producto={
    desc:'Iphone 13',
    precio:1000
}

//Segundo producto
const tableta:Producto={
    desc:'Hawawei',
    precio:700
}

//IMPRIMIMOS
//console.log(tableta);

//PRIMERA VERSIÓN
function calcularIVA(productos:Producto[]):number {
    let total = 0;
    productos.forEach((producto:Producto)=>{
        total += producto.precio;
    })
    //retornar el iva de todos esos productos
    return total*0.16;
}

//SEGUNDA VERSIÓN
export function calIVA(productos:Producto[]):[number,number]{
    let total = 0;
    productos.forEach(({precio})=>{
        total += precio;
    })
    return [total, total*0.16];
    //return total*0.16;
}

//Apartir de aqui se comentaria este codigo para poder imprimir solo lo que tengo en el index.ts
const articulos = [telefono, tableta];

//GUARDAMOS EL IVA
const iva = calcularIVA(articulos);

//IMPRIMIR
console.log(iva);

const[total,IVA] = calIVA(articulos);
console.log('IVA', iva);
console.log('total', total);
