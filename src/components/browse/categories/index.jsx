import { useEffect, useState } from "react";
import { fakeStoreApiUri } from "../../../constants";
import LoadingIndicator1 from "../../indicator/loadingIndicator1";
import "./styles.css";

const Categories = ({ onCategoryChange }) => {
  const [categories, setCategories] = useState(["All"]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch(`${fakeStoreApiUri}/products/categories`)
        .then((res) => res.json())
        .then((data) => {
          setCategories(["All", ...data]);
          setIsLoading(false);
        });
    }, 2000);
  }, []);

  return (
    <ul className="menuItems">
      {isLoading
        ? Array(4).fill(
            <li className="item">
              <LoadingIndicator1 />
            </li>
          )
        : categories.map((c) => (
            <li key={c} className="item">
              <button
                className="button button-52"
                onClick={() => onCategoryChange(c)}
              >
                {c}
              </button>
            </li>
          ))}
    </ul>
  );
};

export default Categories;
