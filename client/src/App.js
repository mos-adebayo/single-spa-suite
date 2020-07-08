import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={{ fontSize: "20px", padding: "20px 10px" }}>
        <a href="/client">Client</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/calendar">Calendar</a>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Client Application</p>
      </header>
    </div>
  );
}

export default App;
