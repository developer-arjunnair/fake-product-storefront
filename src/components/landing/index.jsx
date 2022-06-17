import { Outlet } from "react-router-dom";
import Header from "../header";

const Landing = () => {
  return (
    <main className="grid-rows-2">
      <Header />
      <Outlet />
    </main>
  );
};

export default Landing;
