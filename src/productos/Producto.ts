import { Categoria } from "./Categoria";

export class Producto{
    nombre:string;
    categoria:Categoria;
    constructor(nombre:string, categoria:Categoria){
        this.nombre = nombre;
        this.categoria = categoria;
    }
}