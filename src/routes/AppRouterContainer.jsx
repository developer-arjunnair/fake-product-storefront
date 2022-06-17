import { BrowserRouter, Route, Routes } from "react-router-dom";
import Browse from "../components/browse";
import NotFound from "../components/notFound";
import Landing from "../components/landing";
import App from "../components/main";

const AppRouterContainer = ({ children }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route path="/browse" element={<Browse />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouterContainer;
