import { Categoria } from "../productos/Categoria";
import { Marca } from "../productos/Marca";
import { Producto } from "../productos/Producto";
import { Venta } from "../productos/VentaMarcas";

export var categorias:Categoria[] = [
    {nombre:"Ropa",productos:[]},{nombre:"Telefonos",productos:[]}
];


export let productos:Producto[] = [
    {nombre:"Pantalon",categoria:categorias[0],marcas:[]},
    {nombre:"Camisa",categoria:categorias[0],marcas:[]},
    {nombre:"Telefono Movil",categoria:categorias[1],marcas:[]}
];
categorias[0].productos.push(productos[0]);
categorias[0].productos.push(productos[1]);
categorias[1].productos.push(productos[2]);

export let marcas:Marca[] = [
    {nombre:"Jeans",producto:productos[0],ventas:[]},
    {nombre:"Tommy",producto:productos[0],ventas:[]},
    {nombre:"Lacoste",producto:productos[1],ventas:[]},
    {nombre:"Calvin Klain",producto:productos[1],ventas:[]},
    {nombre:"Samsung Galaxy",producto:productos[2],ventas:[]},
    {nombre:"Xiaomi",producto:productos[2],ventas:[]}
];
productos[0].marcas.push(marcas[0]);
productos[0].marcas.push(marcas[1]);
productos[1].marcas.push(marcas[2]);
productos[1].marcas.push(marcas[3]);
productos[2].marcas.push(marcas[4]);
productos[2].marcas.push(marcas[5]);

export let ventas:Venta[] = [
    {mes:"January",marca:marcas[0],importe:12000},
    {mes:"February",marca:marcas[0],importe:15300},
    {mes:"March",marca:marcas[0],importe:8000},
    {mes:"April",marca:marcas[0],importe:9500},
    {mes:"January",marca:marcas[1],importe:18500},
    {mes:"February",marca:marcas[1],importe:1100},
    {mes:"March",marca:marcas[1],importe:17000},
    {mes:"April",marca:marcas[1],importe:3000},
    {mes:"January",marca:marcas[2],importe:6500},
    {mes:"February",marca:marcas[2],importe:22000},
    {mes:"March",marca:marcas[2],importe:13000},
    {mes:"April",marca:marcas[2],importe:1200},
    {mes:"January",marca:marcas[3],importe:3400},
    {mes:"February",marca:marcas[3],importe:6000},
    {mes:"March",marca:marcas[3],importe:19000},
    {mes:"April",marca:marcas[3],importe:4000},
    {mes:"January",marca:marcas[4],importe:1500},
    {mes:"February",marca:marcas[4],importe:12000},
    {mes:"March",marca:marcas[4],importe:16400},
    {mes:"April",marca:marcas[4],importe:30000},
    {mes:"January",marca:marcas[5],importe:18000},
    {mes:"February",marca:marcas[5],importe:11000},
    {mes:"March",marca:marcas[5],importe:25000},
    {mes:"April",marca:marcas[5],importe:1200}
];

marcas[0].ventas.push(ventas[0]);
marcas[0].ventas.push(ventas[1]);
marcas[0].ventas.push(ventas[2]);
marcas[0].ventas.push(ventas[3]);
marcas[1].ventas.push(ventas[4]);
marcas[1].ventas.push(ventas[5]);
marcas[1].ventas.push(ventas[6]);
marcas[1].ventas.push(ventas[7]);
marcas[2].ventas.push(ventas[8]);
marcas[2].ventas.push(ventas[9]);
marcas[2].ventas.push(ventas[10]);
marcas[2].ventas.push(ventas[11]);
marcas[3].ventas.push(ventas[12]);
marcas[3].ventas.push(ventas[13]);
marcas[3].ventas.push(ventas[14]);
marcas[3].ventas.push(ventas[15]);
marcas[4].ventas.push(ventas[16]);
marcas[4].ventas.push(ventas[17]);
marcas[4].ventas.push(ventas[18]);
marcas[4].ventas.push(ventas[19]);
marcas[5].ventas.push(ventas[20]);
marcas[5].ventas.push(ventas[21]);
marcas[5].ventas.push(ventas[22]);
marcas[5].ventas.push(ventas[23]);