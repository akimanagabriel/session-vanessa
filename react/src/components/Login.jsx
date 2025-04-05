import React, { useState } from "react";

function Login() {
  // reactive state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center" >
      <form className="p-10 m-10 bg-gray-200 w-sm">
        <h1 className="mb-5 text-2xl uppercase font-bold text-sky-500">
          Login form
        </h1>
        <p>Username</p>
        <input
          className="bg-slate-300 w-full p-3 rounded-2xl hover:bg-slate-400 focus:outline-none"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
          type="text"
        />
        <p>Password</p>
        <input
          className="bg-slate-300 w-full p-3 rounded-2xl hover:bg-slate-400 focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button className="bg-indigo-300 my-5 w-full p-3 rounded-2xl hover:bg-indigo-400 focus:outline-none">
          LOGIN
        </button>

        <p>
          {username.length > 0 && <p>username: {username}</p>}
          {password.length > 0 && <p>password: {password}</p>}
        </p>
      </form>
    </div>
  );
}

export default Login;
