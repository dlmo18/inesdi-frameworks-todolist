import { useState } from "react";
import TodoList from "./components/TodoList";
import Login from "./components/Login";
import "./App.css";

function App() {

  let authCache = localStorage.getItem('access_token');

  const [auth, setAuth] = useState(authCache);
  console.log('authCache',authCache,auth);

  return <div className="App">{!auth ? <Login setAuth={setAuth} /> : <TodoList setAuth={setAuth} />}</div>;
}

export default App;
