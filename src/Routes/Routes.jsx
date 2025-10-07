import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/apps",
    element: <Apps></Apps>,
  },
  {
    path: "/installation",
    element: <Installation></Installation>,
  },
]);

export default router;
