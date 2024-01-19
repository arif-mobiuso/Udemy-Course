import React from "react";
import ReactDOM from "react-dom";
const img = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1 className="red">My Favourite Foods</h1>
    <img src={img + "?grayscale"} alt="pic from piscum" />
    <ul>
      <img
        src="https://www.ambitiouskitchen.com/wp-content/uploads/2021/08/How-to-Bake-Bacon-in-the-Oven-3.jpg"
        alt="bacon"
      />
      <img
        src="https://enriquetomas.com/cdn/shop/files/todo-sobre-jamon-lonchas.jpg?v=1693389456&width=1500"
        alt="jomon"
      />
      <img
        src="https://www.recipetineats.com/wp-content/uploads/2023/09/Garlic-noodles-with-egg-close-up.jpg"
        alt="noodles"
      />
    </ul>
  </div>,
  document.getElementById("root")
);
