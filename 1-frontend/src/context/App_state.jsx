import React, { useEffect, useState } from 'react'
import { AppContext } from './App_context'
import axios from 'axios';

const App_state = (props) => {
  const url = "http://localhost:3000/api/";
  const [token, setToken] = useState(" ")
  useEffect(() => {
    //login("jhansi@gmail.com", "123");
  }, [])
  //register
  const register = async (name, email, password) => {
    const api = await axios.post(`${url}/register`, {
      name, email, password
    }, {
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true
    }
    );
    return api;
  }
  //login
  const login = async (email, password) => {
    const api = await axios.post(`${url}/login`, {
      email, password
    }, {
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true
    }
    );
    setToken(api.data.token);
    return api;
    // console.log("login data",api)
  };
  return (
    <AppContext.Provider value={{
      login,
      register,
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default App_state;
