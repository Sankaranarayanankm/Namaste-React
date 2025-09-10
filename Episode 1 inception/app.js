const heading = React.createElement("h1", {}, "Hello World!");
const child = React.createElement("div", { id: "child" }, heading);
const parent = React.createElement("div", { id: "parent" }, [child]);
const render = React.createElement("React.Fragment", {}, [parent, parent]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(render);

// const heading = React.createElement("h1", {}, "Hello World!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// console.log(root);
// console.log(heading);
