import "./Product.css";
import { useStateValue } from "./Context";

function Product({ id, title, price, rating, image }) {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p>
          <small>$</small>
          <strong> {price} </strong>
        </p>
        <p className="product__rating">
          {Array(rating)
            .fill(rating)
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </p>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}
export default Product;
