import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import '@fortawesome/fontawesome-free/css/all.min.css';
import AboutUs from "./pages/AboutUs";
import Recipes from "./pages/Recipes";
import axios from "axios";
import Createrecipes from "./pages/Createrecipes";
import RecipesList from "./pages/RecipesList";

axios.defaults.withCredentials = true;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // ✅ Verify token on page refresh
    axios.get("http://localhost:5000/api/verify", { withCredentials: true })
      .then(res => {
        setIsLoggedIn(true);
      })
      .catch(() => {
        setIsLoggedIn(false);
      });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/createrecipes" element={<Createrecipes />} />
        <Route path="/recipes" element={<RecipesList />} />
      </Routes>
    </Router>
  );
}

export default App;
