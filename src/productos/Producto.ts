import { Categoria } from "./Categoria";
import { Marca } from "./Marca";

export class Producto{
    nombre:string;
    categoria:Categoria;
    marcas:Marca[] = [];
    constructor(nombre:string, categoria:Categoria){
        this.nombre = nombre;
        this.categoria = categoria;
    }
}