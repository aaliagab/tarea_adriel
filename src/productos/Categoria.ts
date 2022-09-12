import { Producto } from "./Producto";

export class Categoria{
    nombre:string;
    productos:Producto[] = [];
    constructor(nombre:string){
        this.nombre = nombre;
    }
}