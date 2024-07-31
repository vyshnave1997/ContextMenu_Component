// src/App.js
import React from "react";
import ContextMenu from "./ContextMenu";
//import './App.css';

const App = () => {
  const menuItems = [
    { label: "Action 1", action: () => alert("Action 1 executed") },
    { label: "Action 2", action: () => alert("Action 2 executed") },
    { label: "Action 3", action: () => alert("Action 3 executed") },
  ];

  return (
    <div className="App">
      <h1>Context Menu Demo</h1>
      <ContextMenu menuItems={menuItems} />
    </div>
  );
};

export default App;
