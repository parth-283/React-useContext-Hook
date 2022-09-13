import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { UserContext } from "./Contex";
import Home from "./Home";
import Login from "./Login";

function App() {
  const [loginData, setLoginData] = useState({ name: "", password: "" });

  return (
    <div className="App">
      <UserContext.Provider value={{loginData, setLoginData}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
