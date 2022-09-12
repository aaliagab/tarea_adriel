import { Producto } from "./Producto";

export class Marca{
    nombre:string;
    producto:Producto;
    constructor(nombre:string, producto:Producto){
        this.nombre = nombre;
        this.producto = producto;
    }
}