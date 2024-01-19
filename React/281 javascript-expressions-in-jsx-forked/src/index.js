import React from "react";
import ReactDOM from "react-dom";
const fName = "Arif";
const lName = "Shaik";
const luckyNumber = Math.floor(Math.random() * 10);

ReactDOM.render(
  <div>
    <h1>hello {fName + " " + lName}</h1>
    <h2>Your lucky is {luckyNumber}</h2>
  </div>,
  document.getElementById("root")
);
