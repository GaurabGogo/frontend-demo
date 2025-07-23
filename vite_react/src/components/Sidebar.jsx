import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import Spinner from "react-spinner";
import ProductCard from "./ProductCard";

const Sidebar = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    try {
      fetch(`https://dummyjson.com/recipes/search?q=${searchText}`)
        .then((res) => res.json())
        .then((data) => setRecipes(data.recipes));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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
        {loading && <Spinner visible={loading} />}

        {!loading &&
          recipes.length > 0 &&
          recipes.map((item, index) => {
            return <ProductCard recipe={item} />;
          })}
        {!loading && recipes.length === 0 && (
          <div className="empty-results">No recipes found</div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
