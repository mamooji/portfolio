import React from "react";
import AppBar from "./components/AppBar/AppBar";
import "./App.css";
import Main from "./components/routes/main";
function App() {
  return (
    <div
      style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}
    >
      <AppBar />
      <Main />
    </div>
  );
}

export default App;
