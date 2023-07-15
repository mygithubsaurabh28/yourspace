import './App.css';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Register from './Components/Register';
import Togle from './Components/Togle';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    
    <Home/>
    <Routes>
    <Route path='/' element={<Togle/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/board' element={<Dashboard/>}/>
    
    </Routes>
  
    
    </>
  
  );
}

export default App;
