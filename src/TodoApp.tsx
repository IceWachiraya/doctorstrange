import React, { useState } from "react";
import AddButton from "./components/AddButton";
import TaskList from "./components/TaskList";
interface ITList {
  id: string;
  title: string;
  completed: boolean;
}

export default function TodoApp() {
  const [text, setText] = useState("");
  const [addToDo, setAddToDo] = useState<ITList[]>([]);

  const generateId = (): string => {
    return "_" + Math.random().toString(36).substring(2, 9);
  };

  const addTask = () => {
    const newTask: ITList = {
      title: text,
      completed: false,
      id: generateId(),
    };
    setAddToDo([...addToDo, newTask]);
    setText("");
  };

  const toggleTask = (id: string) => {
    setAddToDo(
      addToDo.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setAddToDo(addToDo.filter((task) => task.id != id));
  };
  return (
    <div>
      <div className="container">
        <h1>Todo App</h1>
        <div>
          <AddButton
            text={text}
            setText={(e) => setText(e.target.value)}
            addTask={() => addTask()}
          />
        </div>
        <TaskList>
          {addToDo.map((t) => (
            <li key={t.id}>
              <input type="checkbox" onChange={() => toggleTask(t.id)} />
              <span
                style={{
                  textDecorationLine: t.completed ? "line-through" : "none",
                }}
              >
                {t.title}
              </span>

              <button onClick={() => deleteTask(t.id)}>Delete</button>
            </li>
          ))}
        </TaskList>
      </div>
    </div>
  );
}
