const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "hg"),
    React.createElement("h2", {}, "hg"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "gg"),
    React.createElement("h2", {}, "herg"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
