
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
