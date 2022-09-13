import React, { useContext, useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { UserContext } from "./Contex";
import Home from "./Home";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/")
  };

  const {setLoginData,loginData} = useContext(UserContext);
  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) =>
            setLoginData({ ...loginData, [e.target.name]: e.target.value })
          }
        />
        <label>Password</label>
        <input
          type="text"
          name="password"
          onChange={(e) =>
            setLoginData({ ...loginData, [e.target.name]: e.target.value })
          }
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Login;
