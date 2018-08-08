import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "react-emotion";
import Toggle from "./Toggle";

injectGlobal`
  font-family: sans-serif;
`;

function App() {
  return (
    <div style={{ padding: 32 }}>
      <Toggle width={300} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
