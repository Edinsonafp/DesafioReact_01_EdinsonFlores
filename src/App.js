import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portada from './components/Portada';
import HabitacionDetail from './components/HabitacionDetail';
import Information from './components/Information';
import CartContextProvider from './Context/cartContext';
import CartDetail from './components/CartDetail';
import Ordenes from './components/Ordenes';
import OrdenFinalizada from './components/OrdenFinalizada';

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>   
          <Routes>
            <Route path='/' element={<Portada/>}/>
            <Route path='/habitaciones' element={<ItemListContainer/>}/>
            <Route path='/habitaciones/:habID' element={<HabitacionDetail/>}/>
            <Route path='/ordenes' element={<Ordenes/>}/>
            <Route path='/info' element={<Information/>}/>
            <Route path='/cart' element={<CartDetail/>}/>
            <Route path='/ordenFinalizada/:orden' element={<OrdenFinalizada/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>      
    </>
  );
}

export default App;
