import { Search } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import { RecipeIdContext } from "../contexts/RecipeIdContext";
import useFetch from "../hooks/useFetch";
import LoadingSpinner from "./LoadingSpinner";
import ProductCard from "./ProductCard";

const Sidebar = () => {
  const { selectedId, setSelectedId } = useContext(RecipeIdContext);

  const [searchText, setSearchText] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      console.log(inputRef.current);
    }
  }, [inputRef.current]);

  const {
    loading,
    data: recipes,
    error,
    refetch,
  } = useFetch(`https://dummyjson.com/recipes/search?q=${searchText}`);

  useEffect(() => {
    refetch();
  }, [searchText]);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div id="main-sidebar">
      <div className="top-part">
        <div className="logo-box">
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            ref={inputRef}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Search className="search-icon" />
        </div>
      </div>
      <div className="recipes-list">
        <LoadingSpinner loading={loading} />
        {!loading &&
          recipes.recipes.length > 0 &&
          recipes.recipes.map((item, index) => {
            return (
              <ProductCard
                recipe={item}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
              />
            );
          })}
        {!loading && recipes.recipes.length === 0 && (
          <div className="empty-results">No recipes found</div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
