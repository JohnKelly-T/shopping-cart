import { NavLink, Link, Outlet, useLocation } from "react-router-dom";
import styles from "./root.module.css";
import classNames from "classnames/bind";
import Header from "../../components/Header/Header";

const cx = classNames.bind(styles);

function Root() {
  const location = useLocation();

  return (
    <>
      {location.pathname == "/" ? (
        <div className={cx("announcementBar")}>
          Free shipping on all stores Imaginationwide!
        </div>
      ) : (
        <Header />
      )}
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
