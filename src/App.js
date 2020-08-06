import React from "react";
import AppBar from "./components/AppBar/AppBar";
import "./App.css";
import Main from "./components/routes/main";
function App() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <AppBar />
      <Main />
    </div>
  );
}

export default App;
