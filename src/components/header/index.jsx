import { Link } from "react-router-dom";
import "./styles.css";
const Header = () => {
  return (
    <header className="header">
      <h1 className="title">Shopfelt</h1>
      <div className="basket">Bakset</div>
      <nav className="menu">
        <Link to="/"> Home </Link>
        <Link to="/"> About </Link>
        <Link to="/"> Contact </Link>
        <Link to="/browse"> Browse </Link>
      </nav>
    </header>
  );
};

export default Header;
