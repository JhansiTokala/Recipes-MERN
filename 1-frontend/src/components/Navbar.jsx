import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        {/* Logo on the Left */}
        <Link to="/" style={styles.logoContainer}>
          <img src="/logg.png" alt="Logo" style={styles.logo} />
        </Link>
        
        {/* Navbar Links on the Right */}
        <div style={styles.navLinks}>
          <Link to="/home" style={styles.navLink}>Home</Link>
          <Link to="/register" style={styles.navLink}>Register</Link>
          <Link to="/login" style={styles.navLink}>Login</Link>
          <Link to="/createrecipes" style={styles.navLink}>CreateRecipe</Link>
          <Link to="/recipeslist" style={styles.navLink}>Recipelist</Link>
          
          <Link to="/about" style={styles.navLink}>About Us</Link>
        </div>
      </div>
    </nav>
  );
};

// Inline CSS styles
const styles = {
  navbar: {
    backgroundColor: "#ffcc00",
    padding: "12px 20px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "100px",
    height: "auto",
    objectFit: "contain",
  },
  navLinks: {
    display: "flex",
    gap: "25px",
  },
  navLink: {
    fontSize: "1.3rem",
    color: "red",
    textDecoration: "none",
    fontWeight: "bold",
    padding: "8px 12px",
    transition: "0.3s ease-in-out",
  },
};

export default Navbar;
