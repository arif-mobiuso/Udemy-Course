import React, { useState } from "react";

function App() {
  const [isMouseOver, setIsMouseOver] = useState(false);
  function HandleMouseOver() {
    setIsMouseOver(true);
  }
  function HandleMouseOut() {
    setIsMouseOver(false);
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={HandleMouseOver}
        onMouseOut={HandleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
