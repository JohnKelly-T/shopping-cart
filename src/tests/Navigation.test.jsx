import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Root from "../routes/Root/root";
import Home from "../routes/Home/home";
import Shop from "../routes/Shop/shop";
import Cart from "../routes/Cart/cart";
import ErrorPage from "../error-page";

const routes = [
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
];

describe("Navigation", () => {
  describe("Routes", () => {
    const setupRouter = (path = "/") => {
      return createMemoryRouter(routes, {
        initialEntries: [path],
      });
    };

    it("renders home on root route", () => {
      const router = setupRouter();

      render(<RouterProvider router={router} />);

      expect(screen.getByTestId(/home-page/i)).toBeInTheDocument();
    });

    it("renders shop when route is /shop", () => {
      const router = setupRouter("/shop");

      render(<RouterProvider router={router} />);

      expect(screen.getByTestId(/shop-page/i)).toBeInTheDocument();
    });

    it("renders cart when route is /cart", () => {
      const router = setupRouter("/cart");

      render(<RouterProvider router={router} />);

      expect(screen.getByTestId(/cart-page/i)).toBeInTheDocument();
    });

    it("renders error page for non-existent routes", () => {
      const router = setupRouter("/this-route-does-not-exist");

      render(<RouterProvider router={router} />);

      expect(screen.getByTestId(/error-page/i)).toBeInTheDocument();
    });
  });
});
