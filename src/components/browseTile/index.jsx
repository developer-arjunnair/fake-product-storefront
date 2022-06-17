import "./styles.css";
const BrowseTile = ({ image, title, price }) => {
  return (
    <div className="browseTile">
      <img src={image} alt={title} />
      <p className="truncate title">
        <b>{title}</b>
      </p>
      <p className="price">${price}</p>
    </div>
  );
};

export default BrowseTile;
