import React, { useState } from "react";

function Login() {
  // reactive state
  const [username, setUsername] = useState("john");
  const [password, setPassword] = useState("");

  return (
    <form>
      <h1>Login form</h1>
      <p>Username</p>
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        value={username}
        type="text"
      />
      <p>Password</p>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <button>LOGIN</button>

      <p>
        username: {username} <br />
        password: {password}
      </p>
    </form>
  );
}

export default Login;
