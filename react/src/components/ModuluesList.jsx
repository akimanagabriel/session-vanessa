import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ModuluesList() {
  const [courses, setCourses] = useState([]);

  async function getAllModules() {
    const modules = await axios.get("http://localhost:5000/module");
    setCourses(modules.data);
  }

  useEffect(() => {
    getAllModules();
  }, []);

  return (
    <div>
      <h1>Module list</h1>
      <table>
        <thead>
          <tr>
            <th className="border px-2">id</th>
            <th className="border px-2">Name</th>
            <th className="border px-2">Credits</th>
            <th className="border px-2">Marks</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(function (course) {
            return (
              <tr>
                <td className="border px-2">{course.id}</td>
                <td className="border px-2">{course.name}</td>
                <td className="border px-2">{course.credits}</td>
                <td className="border px-2">{course.marks}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h1 className="mt-5 text-3xl font-semibold">
        Create a new module (un finished to be continued)
      </h1>
      <form action="">
        <input
          className="px-2 py-1 border"
          type="text"
          placeholder="module name"
        />{" "}
        <br />
        <input
          className="px-2 py-1 border my-2"
          type="text"
          placeholder="module credits"
        />{" "}
        <br />
        <input
          className="px-2 py-1 border"
          type="text"
          placeholder="module marks"
        />{" "}
        <br />
        <br />
        <button className="px-2 py-1 border bg-red-900 text-white">
          Save module
        </button>
      </form>
    </div>
  );
}
