import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBoostrap from './components/NavBarBooster/NavbarBoostrap';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Carrito from './components/Carrito/Carrito';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavbarBoostrap />

      <Routes>
        <Route path="/" element={<ItemListContainer greetings="Productos"/>}/>
        <Route path="/categoria/:catid" element={<ItemListContainer greetings="Filtrar Busqueda"/>}/>
        <Route path="/producto/:productoid" element={<ItemDetailContainer />}/>
        <Route path="/carrito/" element={<Carrito />}/>
        <Route path="*" element={<Navigate to="/"/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;