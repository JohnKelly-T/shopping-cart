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
      <footer>
        <div className={cx("footerContainer")}>
          <Link to="/" className={cx("siteName")}>
            Faux.
          </Link>
          <div className={cx("footerLinksContainer")}>
            <h3 className={cx("footerListLabel")}>USEFUL LINKS</h3>
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>Cart</li>
            </ul>
          </div>
        </div>

        <div className={cx("attribution")}>
          <div className={cx("developer")}>
            @ 2026 - Designed and Developed by{" "}
            <a href="https://github.com/JohnKelly-T">John Kelly Temeña </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Root;
