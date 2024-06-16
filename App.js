import React from "react";
import ReactDOM from "react-dom";
const heading=React.createElement("h1",{id:"heading"},"hello App!");
// jsx  html like but not html
const jsxheading =<h1 id="heading">hello guru</h1>
    ReactDOM.render(jsxheading,document.getElementById("root"));
    