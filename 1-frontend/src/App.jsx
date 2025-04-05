
import React from 'react'
import Navbar1 from './components/Navbar1'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register'
import AddRecipe from './components/AddRecipe'
import Saved from './components/Saved'
import Home from './components/Home'
import Profile from './components/profile'



const App = () => {
  return (
    <>
    <Router>
    <Navbar1/>
      <Routes>
      <Route path="/" element={  <Home/>}/>
       <Route path="/login" element={  <Login/>}/>
       <Route path="/register" element={  <Register/>}/>
       <Route path="/profile" element={  <Profile/>}/>
       <Route path="/saved" element={  <Saved/>}/>
       <Route path="/add" element={  <AddRecipe/>}/>

      </Routes>
    </Router>
    
   
   
    
    </>
  )
}

export default App;
