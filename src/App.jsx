import TodoList from "./components/TodoList";
import Login from "./components/Login";
import "./App.css";

function App() {
  let auth = true;

  return <div className="App">{auth ? <Login /> : <TodoList />}</div>;
}

export default App;
