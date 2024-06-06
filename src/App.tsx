import "./App.css"
function App() {
  return (
    <div className="container">
      <h1>Todo App</h1>
      <div>
        <input type="text" placeholder="Add a new todo" />
        <button>Add</button>
      </div>
      <ul>
        <li>Task 1</li>
      </ul>
    </div>
  )
}

export default App;