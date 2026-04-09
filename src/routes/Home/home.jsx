import { Link } from "react-router-dom";
import styles from "./home.module.css";
import classNames from "classnames/bind";
import bannerModel from "../../assets/images/banner-model.png";

const cx = classNames.bind(styles);

function Home() {
  return (
    <main data-testid="home-page" className={cx("homepage")}>
      <div className={cx("banner")}>
        <div className={cx("headlineContainer")}>
          <h1 className={cx("headline")}>
            <span>Faux.</span> The Finest Replicas.
          </h1>
          <p className={cx("subheading")}>
            Explore a curated collection of exquisite fake products.
          </p>
        </div>
        <img src={bannerModel} alt="banner-female-model" />
        <div className={cx("promotional-container")}>
          <div className={cx("promotional-heading")}>★ SUPER SALE ★</div>
          <div className={cx("promotional-description")}>
            UNREAL DEALS FOR UNREAL THINGS. 50% OFF FOR EVERY PURCHASE.
          </div>
        </div>

        <Link to="/shop" className={cx("shopNowLink")}>
          Shop Now
        </Link>
      </div>
    </main>
  );
}

export default Home;
