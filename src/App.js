import './App.css';
import BloqueUp from './componentes/BloqueUp';
import ComboBoxes from './componentes/ComboBox';
import { categorias, marcas, productos } from './graficos/Colecciones.ts';
import BarChart from './graficos/Graficos';

function App() {
  return (
    <div className="App">
      <BloqueUp/>
      <ComboBoxes/>
      <BarChart 
        categoria={categorias[0].nombre} 
        producto = {productos[0].nombre} 
        marca = {marcas[0].nombre} />
    </div>
  );
}

export default App;
