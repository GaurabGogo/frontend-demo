import { useState } from "react";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import "./index.css";

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  console.log("selectedId", selectedId);

  return (
    <main className="main">
      <Sidebar selectedId={selectedId} setSelectedId={setSelectedId} />
      <MainContent selectedId={selectedId} />
    </main>
  );
};

export default App;
