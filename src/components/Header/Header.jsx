import { NavLink, Link, Outlet } from "react-router-dom";
import { Handbag } from "lucide-react";
import styles from "./Header.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Header({ variant = "default" }) {
  return (
    <header className={cx("headerContainer", styles[variant])}>
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
  );
}

export default Header;
