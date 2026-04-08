import { NavLink, Outlet } from "react-router-dom";
import styles from "./root.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Root() {
  return (
    <>
      <div className={cx("announcementBar")}>
        Free shipping on all stores Imaginationwide!
      </div>
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
