import { useState } from "react";
import { RecipeIdContext } from "./RecipeIdContext";

export const RecipeIdProvider = ({ children }) => {
  const [selectedId, setSelectedId] = useState();

  return (
    <RecipeIdContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </RecipeIdContext.Provider>
  );
};
