import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Root from "../routes/root";
import Home from "../routes/home";
import Shop from "../routes/shop";
import Cart from "../routes/cart";

const routes = [
  {
    path: "/",
    element: <Root />,
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
  });
});
