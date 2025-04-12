import React, { useState } from "react";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
import ModuluesList from "./components/ModuluesList";

function App() {
  const [username, setUsername] = useState("Vannessa");
  const [password, setPassword] = useState("qbc");

  return (
    <div>
      <nav className="bg-sky-950 text-white p-10">
        <ul className="flex gap-5">
          <li>
            {/* <a href="/">HOME</a> */}
            <Link
              className="hover:text-orange-500"
              to="/"
            >
              HOME
            </Link>
          </li>
          <li>
            {/* <a href="/login">LOGIN</a> */}
            <Link
              className="hover:text-orange-500"
              to={"/login"}
            >
              LOGIN
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-orange-500 uppercase"
              to={"/Register"}
            >
              register
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-orange-500 uppercase"
              to={"/aboutus"}
            >
              aboutus
            </Link>
          </li>
          <li>
            <Link to={"/courses"}>All modules</Link>
          </li>
        </ul>
      </nav>
      <div className="flex">
        <div className="bg-sky-950 text-white w-[200px] px-5 h-screen">
          <h1>side bar</h1>
        </div>
        <div className="w-full p-5">
          <Routes>
            <Route
              path="/"
              element={<h1>Home page</h1>}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/register"
              element={<h1>register</h1>}
            />
            <Route
              path="/aboutus"
              element={<AboutUs />}
            />
            <Route
              path="/courses"
              element={<ModuluesList />}
            />
            <Route
              path="*"
              element={
                <>
                  <h1>Page not found </h1>
                  <center>
                    Back to <Link to={"/"}>home</Link>{" "}
                  </center>
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
