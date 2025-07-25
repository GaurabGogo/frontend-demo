import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import { RecipeIdProvider } from "./contexts/RecipeProvider";
import "./styles/index.css";

const App = () => {
  return (
    <RecipeIdProvider>
      <main className="main">
        <Sidebar />
        <MainContent />
        {/* <TempContent>
        <h2>Hello From Main APP</h2>
      </TempContent> */}
      </main>
    </RecipeIdProvider>
  );
};

export default App;
