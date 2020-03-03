import React from "react";
import "./styles.css";
import { Header } from "./Componants/Header";

export default function App() {
  return (
    <div className="App app">
      <Header
        headerName="TEST"
        onButtonClick={() => {
          alert("This is a test");
        }}
      />
    </div>
    //    <div className="App">
    //      <h1>Hello CodeSandbox</h1>
    //      <h2>Start editing to see some magic happen!</h2>
    //    </div>
  );
}
