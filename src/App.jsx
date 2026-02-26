
import './App.css';
import { Integrantes } from './Integrantes/Integrantes';
import { Navbar } from './Navbar/Navbar';
import { FamiliaBuffo } from './FamiliaBuffo/FamiliaBuffo';
import { Capilla } from './Capilla/Capilla';
import { Ilustracion } from './Ilustracion/Ilustracion';
import { Cortometraje } from './Cortometraje/Cortometraje';
import { Donaciones } from './Donaciones/Donaciones';
import { Fechasimportantes } from './Fechasimportantes/Fechasimportantes';
import { Footer } from './Footer/Footer';

function App() {
  return (
    <div>
        <Navbar/>
        <Ilustracion/>
        <Cortometraje/>
        <Fechasimportantes/>
        <FamiliaBuffo/>
        <Capilla/>
        <Integrantes />
        <Donaciones/>
        <Footer/>
    </div>
  );
}

export default App;
