import logo from './logo.svg';
import './App.css';
import ItemList from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <ItemList name="Hotel Edinson" index="Index" desplegable="Desplegable" ofertas="Ofertas"/>
    </>
  );
}

export default App;
