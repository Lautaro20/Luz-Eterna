
import './App.css';
import { Integrantes } from './Integrantes/Integrantes';
import { Navbar } from './Navbar/Navbar';
import { FamiliaBuffo } from './FamiliaBuffo/FamiliaBuffo';
import { Capilla } from './Capilla/Capilla';
import { Ilustracion } from './Ilustracion/Ilustracion';
import { Cortometraje } from './Cortometraje/Cortometraje';

function App() {
  return (
    <div>
        <Navbar />
        <Ilustracion/>
        <Cortometraje/>
        <FamiliaBuffo />
        <Capilla/>
       <Integrantes />
    </div>
  );
}

export default App;
