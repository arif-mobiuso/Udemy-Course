import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function HandleOnChange(event) {
    const { value, name } = event.target;

    setFullName((previosValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: previosValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: previosValue.fName,
          lName: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={HandleOnChange}
          value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={HandleOnChange}
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
