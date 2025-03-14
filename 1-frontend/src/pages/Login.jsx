import React, { useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("/login", { email, password })
      .then(res => {
        localStorage.setItem("token", res.data.token);  // ✅ Save Token in Local Storage
        setIsLoggedIn(true);  // ✅ Set Login State to True
        navigate("/home1");
      })
      .catch(err => console.log(err));
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.title}>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

// ✅ Inline CSS for Login Page with Background Color
const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    background: "linear-gradient(135deg,rgb(202, 77, 20),rgb(189, 75, 13))",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  loginBox: {
    width: "400px",
    padding: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 15px 40px rgba(0, 0, 0, 0.1)",
    textAlign: "center"
  },
  title: {
    marginBottom: "20px",
    fontSize: "28px",
    fontWeight: "bold",
    color: "#4a4a4a"
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
    outline: "none",
    transition: "all 0.3s",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "18px",
    cursor: "pointer",
    transition: "all 0.3s",
  },
};

// ✅ Add Hover Effect on Button
styles.button[':hover'] = {
  backgroundColor: "#388e3c",
};

export default Login;
