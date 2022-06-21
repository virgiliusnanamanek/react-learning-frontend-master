import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Fido" animal="dog" breed="pug" />
      <Pet name="Bella" animal="dog" breed="labrador" />
      <Pet name="Oscar" animal="dog" breed="labrador" />
      <Pet name="Max" animal="dog" breed="labrador" />
    </div>
  );
};
render(React.createElement(App), document.getElementById("root"));
