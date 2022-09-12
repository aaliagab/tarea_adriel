import { categorias,productos,marcas } from "../graficos/Colecciones.ts";
import "../css/Combos.css";

function ComboBoxes(){
    return(
        <div>
            <div className="comboCategoria">
                <label>Categoria: </label>
                <select>
                    <option value={categorias[0].nombre}>{categorias[0].nombre}</option>
                    <option value={categorias[1].nombre}>{categorias[1].nombre}</option>                    
                </select>
            </div>
            <div className="comboProducto">
                <label>Producto: </label>
                <select>
                    <option value={productos[0].nombre}>{productos[0].nombre}</option>
                    <option value={productos[1].nombre}>{productos[1].nombre}</option>                    
                    <option value={productos[2].nombre}>{productos[2].nombre}</option> 
                </select>
            </div>
            <div className="comboMarca">
                <label>Marca: </label>
                <select>
                    <option value={marcas[0].nombre}>{marcas[0].nombre}</option>
                    <option value={marcas[1].nombre}>{marcas[1].nombre}</option>
                    <option value={marcas[2].nombre}>{marcas[2].nombre}</option>
                    <option value={marcas[3].nombre}>{marcas[3].nombre}</option>
                    <option value={marcas[4].nombre}>{marcas[4].nombre}</option>
                    <option value={marcas[5].nombre}>{marcas[5].nombre}</option>
                    
                </select>
            </div>
        </div>        
    );
}
export default ComboBoxes;