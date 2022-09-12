import { categorias,productos,marcas } from "../graficos/Colecciones.ts";
import "../css/Combos.css";
import { ventas } from "../graficos/Graficos";
//import "./listener.js";

function llenarComboProducto(){
    let comboCategoria = document.getElementById("comboCategoria");
    let comboProducto = document.getElementById("comboProducto");
    let categoria = comboCategoria.value;
    comboProducto.innerHTML = "";
    let objectCategoria = null;
    for(let i = 0; i<categorias.length;i++){
        if(categorias[i].nombre == categoria){
            console.log(categorias[i]);
            objectCategoria = categorias[i];
            i=categorias.length;
        }
    }
    for(let i = 0; i<objectCategoria.productos.length;i++){
        const option = document.createElement('option');
        const valor = new Date().getTime();
        option.value = objectCategoria.productos[i].nombre;
        option.text = objectCategoria.productos[i].nombre;
        comboProducto.appendChild(option);
    }
    llenarComboMarca();

}

function llenarComboMarca(){
    let comboMarca = document.getElementById("comboMarca");
    let comboProducto = document.getElementById("comboProducto");
    let producto = comboProducto.value;
    comboMarca.innerHTML = "";
    let objectProducto = null;
    for(let i = 0; i<productos.length;i++){
        if(productos[i].nombre == producto){
            console.log(productos[i]);
            objectProducto = productos[i];
            i=productos.length;
        }
    }
    for(let i = 0; i<objectProducto.marcas.length;i++){
        const option = document.createElement('option');
        const valor = new Date().getTime();
        option.value = objectProducto.marcas[i].nombre;
        option.text = objectProducto.marcas[i].nombre;
        comboMarca.appendChild(option);
    }
    llenarVentas();

}

function llenarVentas(){
    ventas = [0,0,0,0];
    let comboMarca = document.getElementById("comboMarca");
    let marca = comboMarca.value;
    for(let i = 0; i<marcas.length; i++){
        console.log(marcas[i].nombre);
        if(marcas[i].nombre == marca){
            ventas[0] = marcas[i].ventas[0].importe;
            ventas[1] = marcas[i].ventas[1].importe;
            ventas[2] = marcas[i].ventas[2].importe;
            ventas[3] = marcas[i].ventas[3].importe;
        }            
    }
}


function ComboBoxes(){
    const clickCategoria = ()=>{
        llenarComboProducto();
    }
    
    const clickProduto = ()=>{    
        llenarComboMarca();
    }
    
    const clickMarca = ()=>{
        llenarVentas();
    }
    return(
        <div>            
            <div className="comboCategoria">
                <label>Categoria: </label>
                <select id="comboCategoria" onClick={clickCategoria}>
                    <option value={categorias[0].nombre}>{categorias[0].nombre}</option>
                    <option value={categorias[1].nombre}>{categorias[1].nombre}</option>                    
                </select>
            </div>
            <div className="comboProducto">
                <label>Producto: </label>
                <select id="comboProducto" onClick={clickProduto}>
                    <option value={productos[0].nombre}>{productos[0].nombre}</option>
                    <option value={productos[1].nombre}>{productos[1].nombre}</option> 
                </select>
            </div>
            <div className="comboMarca">
                <label>Marca: </label>
                <select id="comboMarca" onClick={clickMarca}>
                    <option value={marcas[0].nombre}>{marcas[0].nombre}</option>
                    <option value={marcas[1].nombre}>{marcas[1].nombre}</option>                    
                </select>
            </div>
        </div>        
    );
}
export default ComboBoxes;

