import { useState } from "react";
import "./App.css";
import AddButton from "./components/AddButton";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import TodoApp from "./TodoApp";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoApp />} />
      </Routes>
    </>
  );
}

export default App;
