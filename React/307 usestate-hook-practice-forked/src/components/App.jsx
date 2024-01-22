import React, { useState } from "react";

function App() {
  const [time, setTime] = useState("time");
  function fetchTime() {
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(fetchTime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={fetchTime}>Get Time</button>
    </div>
  );
}

export default App;
