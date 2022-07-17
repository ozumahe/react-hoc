import React from "react";
import "./App.css";
import UsersSearch from "./components/Users";
import TodosSearch from "./components/Todos";

function App() {
  return (
    <>
      <div>
        <UsersSearch />
      </div>
      <div>
        <TodosSearch />
      </div>
    </>
  );
}

export default App;
