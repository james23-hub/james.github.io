import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi,triplePi } from "./math.js";

ReactDOM.render(
  <ul>
    <li> {doublePi()} </li>
    <li> {pi}</li>
    <li> {triplePi()} </li>
  </ul>,
  document.getElementById("root")
);
Fil
Fil Duran
const pi = 3.1415692;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}


export default pi;
export {doublePi, triplePi};
