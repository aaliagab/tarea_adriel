import { categorias, productos, marcas } from "../graficos/Colecciones.ts";

let comboCategoria = document.getElementById("comboCategoria");
let comboProducto = document.getElementById("comboProducto");
let comboMarca = document.getElementById("comboMarca");
console.log("SELECIONADAAAA "+comboCategoria.value);

export function llenarCombos(){
    let categoria = comboCategoria.value;
    console.log("SELECIONADAAAA "+categoria);

}

document.querySelector('#comboCategoria').value = 1;

if ("createEvent" in document) {
   var evt = document.createEvent("HTMLEvents");
   evt.initEvent("change", 'consulta_select_hijo', true);
   document.getElementById('comboCategoria').dispatchEvent(evt);
   llenarCombos();
}
else {
   document.getElementById('comboCategoria').fireEvent("onchange");
   llenarCombos();
}