import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Settings from './pages/Settings'
import Home from './pages/Home'
import Home2 from './pages/Home2'
import About from './pages/About'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Details from './pages/Details'
function App() {
  return (
   <>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/Login' element={<Login/>}/>
    <Route exact path='/Register' element={<Register/>}/>
    <Route exact path='/Dashboard'element={<Dashboard/>} />
    <Route exact path='/About'element={<About/>} />
    <Route exact path='/Home2'element={<Home2/>} />
    <Route exact path='/Users' element={<Users/>}/>
    <Route exact path='/Settings' element={<Settings/>}/>
    <Route exact path='/privacy' element={<Privacy/>}/>
    <Route exact path='/terms' element={<Terms/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    <Route exact path='/faq' element={<Faq/>}/>
    <Route exact path='/details' element={<Details/>}/>

   </Routes>
   </>
  )
}

export default App