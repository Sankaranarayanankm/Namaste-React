import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Namaste React!");
const root = ReactDOM.createRoot(document.getElementById("root"));

const jsxHeading = <h1>Namaste React using JSX</h1>;
console.log(jsxHeading);
console.log(heading);

root.render(jsxHeading);
