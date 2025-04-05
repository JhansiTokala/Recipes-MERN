import React from 'react'
import { Link } from 'react-router-dom'
const Navbar1 = () => {
  return (
    <>
      <div className="nav bg-danger p-3">
        <div className="left">
          <h2> Foodie</h2>
          </div>
          <div className="right">
            <Link to={"/login"} className="btn btn-primary mx-3">Login</Link>
            <Link to={"/register"} className="btn btn-warning mx-3">Register</Link>
            <Link to={"/add"} className="btn btn-info mx-3">Add</Link>
            <Link to ={"/profile"} className="btn btn-warning mx-3">Profile</Link>
            <div className="btn btn-success mx-3">Logout</div>
            <Link to={"/saved"} className="btn btn-light mx-3">Saved</Link>
          </div>
       
      </div>
    </>
  )
}

export default Navbar1
