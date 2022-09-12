import { Producto } from "./Producto";
import { Venta } from "./VentaMarcas";

export class Marca{
    nombre:string;
    producto:Producto;
    ventas:Venta[] = [];
    constructor(nombre:string, producto:Producto){
        this.nombre = nombre;
        this.producto = producto;
    }
}