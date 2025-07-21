import Velocis from "./Velocis";

function HelloWorld() {
  console.log("Hello World");

  return (
    <>
      <h1>
        Hello World,
        <Velocis title="Velocis" age="1" />
      </h1>
      <Velocis title="Nepal" age="24" />
    </>
  );
}

export default HelloWorld;
