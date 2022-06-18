import { useEffect, useState } from "react";
import { fakeStoreApiUri } from "../../constants";
import BrowseTile from "../browseTile";
import LoadingIndicator2 from "../indicator/loadingIndicator2";

import Categories from "./categories";
import "./styles.css";

const Browse = () => {
  const ALL_CATEGORY = "All";

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState(ALL_CATEGORY);
  useEffect(() => {
    setIsLoading(true);

    let url = `${fakeStoreApiUri}/products`;
    if (category !== ALL_CATEGORY) {
      url += `/category/${category}`;
    }

    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          setIsLoading(false);
        })
        .catch((e) => {
          console.error(e);
          setIsLoading(false);
        });
    }, 20);
  }, [category]);

  const handleCategoryChange = (cat = ALL_CATEGORY) => {
    setCategory(cat);
  };

  return (
    <div className="superBrowse">
      <div className="categoriesContainer">
        <Categories onCategoryChange={handleCategoryChange} />
      </div>

      <ul className="browseList">
        {isLoading ? (
          <LoadingIndicator2 />
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
    </div>
  );
};

export default Browse;
