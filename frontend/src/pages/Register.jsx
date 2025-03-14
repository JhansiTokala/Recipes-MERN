import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "../axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 120vh;
  background: url("/register.jpg") no-repeat center center fixed;
  background-size: cover;
  padding-left: 30px;
`;

const FormWrapper = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 400px;
  text-align: center;
  color: white;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 12px 0;
  border: 1px solid #555;
  border-radius: 6px;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
`;

const Button = styled.button`
  width: 100%;
  background: #ff9900;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 15px;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #cc7700;
  }
`;

const Register = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post("/register", {
        username,
        email,
        password
      });

      if (res.status === 201) {
        toast.success("🎉 Registration Successful! Redirecting to Login...", {
          position: "top-center",
          autoClose: 3000
        });

        // Redirect to login after 3 seconds
        setTimeout(() => {
     
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      console.error("❌ Registration Error:", error.response?.data);

      // Handle Error with Toast
      if (error.response?.data?.message.includes("Email already exists")) {
        toast.error("❌ Email already exists! Try another one.", {
          position: "top-center",
          autoClose: 3000
        });
      } else {
        toast.error("❌ Registration Failed. Please try again.", {
          position: "top-center",
          autoClose: 3000
        });
      }
    }
  };

  return (
    <RegisterContainer>
      <FormWrapper>
        <h2>Register</h2>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleRegister}>Register</Button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </FormWrapper>
      <ToastContainer />
    </RegisterContainer>
  );
};

export default Register;
