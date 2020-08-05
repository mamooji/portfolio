import React from "react";
import AppBar from "./components/AppBar/AppBar";
import "./App.css";
import Main from "./components/routes/main";
function App() {
  return (
    <div>
      <AppBar />
      <Main />
    </div>
  );
}

export default App;
