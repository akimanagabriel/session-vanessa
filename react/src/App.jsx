import React, { useState } from "react";
import Login from "./components/Login";
import "./styles.css";

function App() {
  const [count, setCount] = useState(50);
  function notifify() {
    setCount(count + 1);
  }

  return (
    <div>
      <Login />

      {/* <h1>{count}</h1>
      <button onClick={notifify}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button> */}
    </div>
  );
}

export default App;
