// src/App.js
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Starships from "./Starships";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Starships />
      </header>
    </div>
  );
}

export default App;
