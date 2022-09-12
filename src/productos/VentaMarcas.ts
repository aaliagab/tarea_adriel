import { Marca } from "./Marca";

export class Venta{
    mes: string;
    marca:Marca;
    importe:number;
    constructor(mes: string,marca:Marca,importe:number){
        this.mes = mes;
        this.marca = marca;
        this.importe = importe;
    }
}