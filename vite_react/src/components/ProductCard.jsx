import { Clock4, Star } from "lucide-react";

const ProductCard = (props) => {
  const { image, name, difficulty, rating, cookTimeMinutes } = props.recipe;

  return (
    <div className="product-card">
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
