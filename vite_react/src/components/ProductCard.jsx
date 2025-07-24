import { Clock4, Star } from "lucide-react";

const ProductCard = (props) => {
  const { id, image, name, difficulty, rating, cookTimeMinutes } = props.recipe;

  const { selectedId, setSelectedId } = props;

  const handleProductCardClick = (id) => {
    console.log("id", id);
    setSelectedId(id);
  };

  return (
    <div className="product-card" onClick={() => handleProductCardClick(id)}>
      <div className="product-card__image">
        <img src={image} alt="product-card-image" />
      </div>
      <div className="product-card__content">
        <div className="title">{name}</div>
        <div className="info-container">
          <div className="duration">
            <Clock4 />
            {cookTimeMinutes} min
          </div>
          <div className="rating">
            <Star />
            {rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
