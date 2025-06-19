import { useContext } from "react";
import css from "./Hero.module.css";
import img from "../../assets/images/hero.jpg";
import sprite from "../../assets/icons/sprite.svg";
import { ModalContext } from "../../App";

export const Hero = () => {
    const { openModal } = useContext(ModalContext);
    
    return (
        <section className={css.heroOverlay}>
            <div className={css.heroHeader}>
                <div className={css.heroInfo}>
                    <h1 className={css.heroTitle}>
                        building <span>data-driven</span> e-commerce on shopify
                    </h1>

                    <div className={css.heroTextWrapper}>
                        <p className={css.heroText}>
                            We help businesses grow and scale with our expertise
                            in{" "}
                            <span className={css.heroTextSpan}>
                                <span className={css.heroTextSpanInner}>
                                    performance
                                </span>{" "}
                                marketing
                            </span>
                            ,{" "}
                            <span className={css.heroTextSpan}>
                                <span className={css.heroTextSpanInner}>
                                    user
                                </span>{" "}
                                experience
                            </span>{" "}
                            and{" "}
                            <span className={css.heroTextSpan}>
                                <span className={css.heroTextSpanInner}>
                                    creative
                                </span>{" "}
                                strategy
                            </span>
                        </p>

                        <div className={css.heroBtnWrapper}>
                            <button 
                                className={css.heroBtn}
                                onClick={openModal}
                            >
                                <p className={css.heroBtnText}>
                                    free strategy call
                                </p>
                                <svg className={css.heroBtnIcon}>
                                    <use href={`${sprite}#icon-calendar`}></use>
                                </svg>
                            </button>

                            <p className={css.heroTextLast}>
                                146+ reviews.{" "}
                                <span>
                                    all chanses that you'll be impressed too.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className={css.hero}>
                    <img
                        src={img}
                        alt="hero"
                    />
                </div>
            </div>

            <div className={css.heroFooter}>
                <button className={css.heroFooterBtn}>
                    <p className={css.heroFooterBtnText}>
                        <span>Play</span> Showreel
                    </p>
                    <svg className={css.heroFooterBtnIcon}>
                        <use href={`${sprite}#icon-play`}></use>
                    </svg>
                </button>
            </div>
        </section>
    );
};
