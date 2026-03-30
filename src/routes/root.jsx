import { NavLink, Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <header>
        <nav>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Root;
