import React from "react";

function Velocis(props) {
  const { title, age } = props;
  const [var2, setNewVar] = React.useState(true);

  function toggle() {
    if (var2) {
      setNewVar(false);
    } else {
      setNewVar(true);
    }
  }

  return (
    <div>
      <span>{title}</span> <span>{age}</span>
      <button onClick={toggle}>Toggle</button>
      {var2 && <span>Happy Hacking</span>}
    </div>
  );
}

export default Velocis;
