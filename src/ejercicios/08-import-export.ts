import {Producto, calIVA} from "./07-dest-args";

const carritoCompras:Producto[]=[
    {
        desc:'Telefono 1',
        precio:1500
    },
    {
        desc:'Telefono 2',
        precio:1700
    }
]

const [total,iva] = calIVA(carritoCompras);
console.log(total,iva);