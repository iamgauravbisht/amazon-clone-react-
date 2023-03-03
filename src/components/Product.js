import "./Product.css";
function Product({ id, title, price, rating, image }) {
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
      <button>Add to Basket</button>
    </div>
  );
}
export default Product;
