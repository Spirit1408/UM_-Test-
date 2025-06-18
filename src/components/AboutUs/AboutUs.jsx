import css from "./AboutUs.module.css";
import img from "../../assets/images/face.jpg";
import sprite from "../../assets/icons/sprite.svg";

export const AboutUs = () => {
    return (
        <section className={css.aboutUsOverlay}>
            <div className={css.header}>
                <div className={css.label}>
                    <span className={css.dot}></span>
                    <p className={css.labelText}>our mission</p>
                </div>

                <div className={css.descriptionWrapper}>
                    <p className={css.description}>
                        We believe that by creating value for people we make the
                        world a happier place.
                    </p>
                    <p className={css.description}>
                        Based on our experience and innovative approach in
                        marketing. Our{" "}
                        <span>
                            clients implement their values and ideas,
                            integrating sustainable development into the
                            foundation of their digital business.
                        </span>
                    </p>
                </div>

                <div className={css.person}>
                    <div className={css.photoWrapper}>
                        <img
                            className={css.photo}
                            src={img}
                            alt="face of the founder"
                        />

                        <div className={css.iconWrapper}>
                            <svg className={css.icon}>
                                <use href={`${sprite}#icon-play`}></use>
                            </svg>
                        </div>
                    </div>

                    <p className={css.name}>Victor Terekhovskyi</p>

                    <p className={css.title}>Сo-founder & COO</p>
                </div>
            </div>

            <ul className={css.footer}>
                <li className={css.feature}>
                    <svg className={css.featureIcon}>
                        <use href={`${sprite}#icon-label_crown`}></use>
                    </svg>

                    <p className={css.featureDesc}>Top Rated Plus</p>
                </li>

                <li className={css.feature}>
                    <svg className={css.featureIcon}>
                        <use href={`${sprite}#icon-label_stars`}></use>
                    </svg>

                    <p className={css.featureDesc}>146+ reviewed company</p>
                </li>

                <li className={css.feature}>
                    <svg className={css.featureIcon}>
                        <use href={`${sprite}#icon-label_shop`}></use>
                    </svg>

                    <p className={css.featureDesc}>Shopify partners Agency</p>
                </li>

                <li className={css.feature}>
                    <svg className={css.featureIcon}>
                        <use href={`${sprite}#icon-label_up`}></use>
                    </svg>

                    <p className={css.featureDesc}>
                        100% Job Success on Upwork
                    </p>
                </li>
            </ul>
        </section>
    );
};
