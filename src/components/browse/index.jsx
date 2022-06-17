import { useEffect, useState } from "react";
import BrowseTile from "../browseTile";
import "./styles.css";

const Browse = () => {
  const baseUrl = "https://26quhu.sse.codesandbox.io";
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(`${baseUrl}/products`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setIsLoading(false);
      });
  }, []);

  return (
    <ul className="browseList">
      {isLoading ? (
        <p>Content is loading</p>
      ) : (
        products.map(({ id, title, price, image }) => {
          return (
            <li key={id}>
              <BrowseTile id={id} title={title} price={price} image={image} />
            </li>
          );
        })
      )}
    </ul>
  );
};

export default Browse;
