import './App.css';
import BloqueUp from './componentes/BloqueUp';
import ComboBoxes from './componentes/ComboBox';
import BarChart from './graficos/Graficos';

function App() {
  return (
    <div className="App">
      <BloqueUp/>
      <ComboBoxes/>
      <BarChart/>
    </div>
  );
}

export default App;
