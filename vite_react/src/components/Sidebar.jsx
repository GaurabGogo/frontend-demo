import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import ProductCard from "./ProductCard";

const Sidebar = (props) => {
  const { selectedId, setSelectedId } = props;
  const [recipes, setRecipes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      fetch(`https://dummyjson.com/recipes/search?q=${searchText}`)
        .then((res) => res.json())
        .then((data) => setRecipes(data.recipes))
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 3000);

    return () => clearTimeout(timer);
  }, [searchText]);

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
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Search className="search-icon" />
        </div>
      </div>
      <div className="recipes-list">
        <LoadingSpinner loading={loading} />
        {!loading &&
          recipes.length > 0 &&
          recipes.map((item, index) => {
            return (
              <ProductCard
                recipe={item}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
              />
            );
          })}
        {!loading && recipes.length === 0 && (
          <div className="empty-results">No recipes found</div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
