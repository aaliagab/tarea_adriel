import { categorias, productos, marcas } from "../graficos/Colecciones.ts";
import "../css/Combos.css";

export function llenarComboProducto(){
    let comboCategoria = document.getElementById("comboCategoria");
    let comboProducto = document.getElementById("comboProducto");
    if (comboProducto!=null) {
        let categoria = "";
        if(comboCategoria)
            categoria = comboCategoria.value;        
            comboProducto.innerHTML = "";
        let objectCategoria = categorias[0];
        for (let i = 0; i < categorias.length; i++) {
            if (categorias[i].nombre === categoria) {
                objectCategoria = categorias[i];
                i = categorias.length;
            }
        }
        for (let i = 0; i < objectCategoria.productos.length; i++) {
            const option = document.createElement('option');
            option.value = objectCategoria.productos[i].nombre;
            option.text = objectCategoria.productos[i].nombre;
            comboProducto.appendChild(option);
        }
        llenarComboMarca();
        llenarVentas();
    }
}
/*export var llenarComboProducto = new Promise(
    function (categoria = comboCategoria.value) {
        if (categoria && document.getElementById("comboProducto")) {
            document.getElementById("comboProducto").innerHTML = "";
            let objectCategoria = categorias[0];
            for (let i = 0; i < categorias.length; i++) {
                if (categorias[i].nombre === categoria) {
                    objectCategoria = categorias[i];
                    i = categorias.length;
                }
            }
            for (let i = 0; i < objectCategoria.productos.length; i++) {
                const option = document.createElement('option');
                option.value = objectCategoria.productos[i].nombre;
                option.text = objectCategoria.productos[i].nombre;
                document.getElementById("comboProducto").appendChild(option);
            }
            llenarComboMarca();
        }
    }
);*/

export function llenarComboMarca(){
    let comboProducto = document.getElementById("comboProducto");
    let comboMarca = document.getElementById("comboMarca");
    if (comboMarca!=null) {
        let producto = "";
        if(comboProducto)
            producto = comboProducto.value;
            comboMarca.innerHTML = "";
        let objectProducto = productos[0];
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].nombre === producto) {
                objectProducto = productos[i];
                i = productos.length;
            }
        }
        for (let i = 0; i < objectProducto.marcas.length; i++) {
            const option = document.createElement('option');
            option.value = objectProducto.marcas[i].nombre;
            option.text = objectProducto.marcas[i].nombre;
            comboMarca.appendChild(option);
        }
        llenarVentas();
    }
}
/*export var llenarComboMarca = new Promise(
    function (producto = comboProducto.value) {
        if (producto && document.getElementById("comboMarca")) {
            document.getElementById("comboMarca").innerHTML = "";
            let objectProducto = productos[0];
            for (let i = 0; i < productos.length; i++) {
                if (productos[i].nombre === producto) {
                    objectProducto = productos[i];
                    i = productos.length;
                }
            }
            for (let i = 0; i < objectProducto.marcas.length; i++) {
                const option = document.createElement('option');
                option.value = objectProducto.marcas[i].nombre;
                option.text = objectProducto.marcas[i].nombre;
                document.getElementById("comboMarca").appendChild(option);
            }
            llenarVentas();
        }
    }
);*/

export let ventas = [0, 0, 0, 0];
export function llenarVentas(){  
    let comboMarca = document.getElementById("comboMarca");          
    let marca = "";
    if(comboMarca)
        marca=comboMarca.value;
    for(let i = 0; i<marcas.length; i++){
        if(marcas[i].nombre === marca){
            ventas[0] = marcas[i].ventas[0].importe;
            ventas[1] = marcas[i].ventas[1].importe;
            ventas[2] = marcas[i].ventas[2].importe;
            ventas[3] = marcas[i].ventas[3].importe;
        }            
    }
    
    return ventas;

}

/*export let llenarVentas = new Promise(function (value = comboMarca.value) {
    if (value != null) {
        let marca = value;
        for (let i = 0; i < marcas.length; i++) {
            if (marcas[i].nombre === marca) {
                ventas[0] = marcas[i].ventas[0].importe;
                ventas[1] = marcas[i].ventas[1].importe;
                ventas[2] = marcas[i].ventas[2].importe;
                ventas[3] = marcas[i].ventas[3].importe;
            }
        }
        return ventas;
    } else { }
});*/

function ComboBoxes() {
    const clickCategoria = () => {
        llenarComboProducto();
        llenarVentas();
    }

    const clickProduto = () => {
        llenarComboMarca();
        llenarVentas();
    }

    const clickMarca = () => {
        llenarVentas();
    }

    return (        
        <div>
            <div className="comboCategoria">
                <label>Categoria: </label>
                <select id="comboCategoria" onChange={clickCategoria} onClick={clickCategoria}>
                    <option value={categorias[0].nombre}>{categorias[0].nombre}</option>
                    <option value={categorias[1].nombre}>{categorias[1].nombre}</option>
                </select>
            </div>
            <div className="comboProducto">
                <label>Producto: </label>
                <select id="comboProducto" onChange={clickProduto} onClick={clickProduto}>
                    <option value={productos[0].nombre}>{productos[0].nombre}</option>
                    <option value={productos[1].nombre}>{productos[1].nombre}</option>
                </select>
            </div>
            <div className="comboMarca">
                <label>Marca: </label>
                <select id="comboMarca" onLoadedData={llenarVentas} onChange={clickMarca} onClick={clickMarca}>
                    <option value={marcas[0].nombre}>{marcas[0].nombre}</option>
                    <option value={marcas[1].nombre}>{marcas[1].nombre}</option>
                </select>
            </div>
        </div>        
    );
}
export default ComboBoxes;
llenarVentas();

