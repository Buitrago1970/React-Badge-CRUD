// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";

// const element = <h1>Hello, platzi Badges from react!</h1>;
// const name = "martinez";
// const jsx = <h1>hola soy,{null}</h1>;

// vamos a usar SOLO jsx

const jsx = (
  <div>
    <h1>Hola soy, un crack</h1>
    <p>que no vende crack</p>
  </div>
);

const container = document.getElementById("app");

// ReactDOM.render(__qué__,__dónde__)
ReactDOM.render(jsx, container);
