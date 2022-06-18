import { Outlet } from "react-router-dom";
import Header from "../header";
import "./styles.css";

const Landing = () => {
  return (
    <main className="landing">
      <Header />
      <Outlet />
    </main>
  );
};

export default Landing;
