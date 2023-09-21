
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/home' element={<Home/>}/>
    
    </Routes>
    </BrowserRouter>
  );
}
export default App;
