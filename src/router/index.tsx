import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../views/AboutPage";
import FeaturePage from "../views/FeaturePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/feature/:id",
        element: <FeaturePage />,
      },
    ],
  },
]);

export default router;
