import React, { useState } from "react";
import "./App.css";
import Login from './components/Login';
import Signup from "./components/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  console.log("authenticated", authenticated);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            authenticated ? (
              <Home />
            ) : (
              <Login setAuthenticated={setAuthenticated} />
            )
          }
        />
        <Route path="/register" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
