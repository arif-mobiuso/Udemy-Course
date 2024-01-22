import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");
  function HandleOnChange(event) {
    setName(event.target.value);
  }
  function HandleOnSubmit(event) {
    setHeadingText(name);

    event.preventDefault();
  }
  return (
    <div className="container">
      <form onSubmit={HandleOnSubmit}>
        <h1>Hello {headingText}</h1>
        <input
          type="text"
          placeholder="What's your name?"
          onChange={HandleOnChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
