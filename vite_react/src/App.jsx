import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import "./index.css";

const App = () => {
  return (
    <main className="main">
      <Sidebar />
      <MainContent />
    </main>
  );
};

export default App;
