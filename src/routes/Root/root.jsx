import { NavLink, Link, Outlet } from "react-router-dom";
import { Handbag } from "lucide-react";
import styles from "./root.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Root() {
  return (
    <>
      <div className={cx("announcementBar")}>
        Free shipping on all stores Imaginationwide!
      </div>
      <header className={cx("headerContainer")}>
        <nav className={cx("navBar")}>
          <ul>
            <li>
              <Link to="/" className={cx("siteName")}>
                Faux.
              </Link>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <Link to="/cart" className={cx("shoppingCartLink")}>
                <Handbag className={cx("shoppingCartIcon")} />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Root;
