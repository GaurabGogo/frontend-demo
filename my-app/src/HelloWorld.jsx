import React from "react";
import Velocis2 from "./Velocis2";

function HelloWorld() {
  console.log("Hello World");
  const [var2, setNewVar] = React.useState(true);

  function toggle() {
    if (var2) {
      setNewVar(false);
    } else {
      setNewVar(true);
    }
  }

  return (
    <>
      <h1>
        {/* Hello World, */}
        {/* <Velocis title="Velocis" age="1" var2={var2} toggle={toggle} /> */}
      </h1>
      {/* <Velocis title="Nepal" age="24" /> */}
      <Velocis2 var2={var2} toggle={toggle} />
    </>
  );
}

export default HelloWorld;
