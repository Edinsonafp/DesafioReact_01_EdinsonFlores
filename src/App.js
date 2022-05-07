import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portada from './components/Portada';
import HabitacionDetail from './components/HabitacionDetail';
import Information from './components/Information';

function App() {
  return (
    <>
      
      <BrowserRouter>
        <NavBar/>   
        <Routes>
          <Route path='/' element={<Portada/>}/>
          <Route path='/habitaciones' element={<ItemListContainer/>}/>
          <Route path='/habitaciones/:habID' element={<HabitacionDetail/>}/>
          <Route path='/info' element={<Information/>}/>
          <Route path='/cart' element={<Information/>}/>
        </Routes>
      </BrowserRouter>
      
         
      
    </>
  );
}

export default App;
