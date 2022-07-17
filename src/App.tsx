import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/Todos";
import UsersSearch from "./components/Users";

function App() {
  return (
    <>
      <UsersSearch />
      <Todos />
    </>
  );
}

export default App;
