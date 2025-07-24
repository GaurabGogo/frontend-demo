import axios from "axios";
import { useEffect, useState } from "react";

const MainContent = (props) => {
  const { selectedId } = props;
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchRecipeById = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
      setRecipe(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipeById(selectedId);
  }, [selectedId]);

  return (
    <div id="main-content">
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
