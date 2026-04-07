import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./reset.css";
import "./index.css";
import Home from "./routes/Home/home";
import Root from "./routes/Root/root";
import Shop from "./routes/Shop/shop";
import Cart from "./routes/Cart/cart";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/shop",
            element: <Shop />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
