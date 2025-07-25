import { useContext, useEffect } from "react";
import { RecipeIdContext } from "../contexts/RecipeIdContext";
import useFetch from "../hooks/useFetch";
import LoadingSpinner from "./LoadingSpinner";

const MainContent = () => {
  const { selectedId, setSelectedId } = useContext(RecipeIdContext);

  const {
    loading,
    data: recipe,
    error,
    refetch,
  } = useFetch(`https://dummyjson.com/recipes/${selectedId}`);

  useEffect(() => {
    refetch();
  }, [selectedId]);

  return (
    <div id="main-content">
      <LoadingSpinner loading={loading} />

      {!selectedId && (
        <div className="initial-content">
          Begin By Searching or Selecting Your First Recipe
        </div>
      )}
      {selectedId && !loading && (
        <div className="recipe-container">
          <div className="recipe-image">
            <img src={recipe.image} alt="recipe-image" />
            <div className="overlay">&nbsp;</div>
            <h1 className="recipe-title">{recipe.name}</h1>
          </div>
          <div className="recipe-content">
            <div className="recipe-ingredients-container">
              <h2>Ingredients</h2>
              <div className="recipe-ingredients-grid">
                <ul className="recipe-ingredients">
                  {recipe.ingredients &&
                    recipe.ingredients
                      .slice(0, recipe.ingredients.length / 2)
                      .map((ingredient) => <li>{ingredient}</li>)}
                </ul>
                <ol className="recipe-ingredients">
                  {recipe.ingredients &&
                    recipe.ingredients
                      .slice(-recipe.ingredients.length / 2)
                      .map((ingredient) => <li>{ingredient}</li>)}
                </ol>
              </div>
            </div>
            <div className="recipe-instructions-container">
              <h2>Instructions</h2>
              <div className="recipe-instructions-grid">
                <ul className="recipe-instructions">
                  {recipe.instructions &&
                    recipe.instructions.map((instruction) => (
                      <li>{instruction}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;
