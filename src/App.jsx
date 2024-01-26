import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="flex inset-y-0 left-0">
        <div
          className="flex flex-col gap-3 justify-around shadow-md px-4 bg-stone-300
      py-2 w-20 h-svh"
        >
          <button
            onClick={() => setColor("violet")}
            className="outline-none w-10 h-10 "
            style={{ backgroundColor: "violet" }}
          ></button>

          <button
            onClick={() => setColor("indigo")}
            className="outline-none w-10 h-10 "
            style={{ backgroundColor: "indigo" }}
          ></button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none w-10 h-10 "
            style={{ backgroundColor: "blue" }}
          ></button>

          <button
            onClick={() => setColor("green")}
            className="outline-none w-10 h-10 "
            style={{ backgroundColor: "green" }}
          ></button>

          <button
            onClick={() => setColor("yellow")}
            className="outline-none w-10 h-10 "
            style={{ backgroundColor: "yellow" }}
          ></button>

          <button
            onClick={() => setColor("orange")}
            className="outline-none w-10 h-10 "
            style={{ backgroundColor: "orange" }}
          ></button>

          <button
            onClick={() => setColor("red")}
            className="outline-none w-10 h-10 "
            style={{ backgroundColor: "red" }}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default App;
