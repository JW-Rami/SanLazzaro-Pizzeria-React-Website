import React, { useState } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

import Loading from "./components/Loading/Loading";
import { BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import CompleteMenu from "./components/CompleteMenu/CompleteMenu";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  window.addEventListener("load", () => {
    setIsLoading(false);
  });
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Test" element={<CompleteMenu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
