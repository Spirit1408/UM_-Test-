import css from "./Header.module.css";
import sprite from "../../assets/icons/sprite.svg";
import clsx from "clsx";
import { useState, useEffect } from "react";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);

    return (
        <header
            className={clsx(css.headerOverlay, scrolled && css.headerScrolled)}>
            <div className={css.header}>
                <div className={css.logoWrapper}>
                    <svg className={css.logo}>
                        <use href={`${sprite}#icon-logo`}></use>
                    </svg>

                    <ul className={css.navList}>
                        <li>
                            <a
                                className={css.navLink}
                                href="#">
                                services
                            </a>
                        </li>
                        <li>
                            <a
                                className={css.navLink}
                                href="#">
                                our approach
                            </a>
                        </li>
                        <li>
                            <a
                                className={css.navLink}
                                href="#">
                                projects
                            </a>
                        </li>
                        <li>
                            <a
                                className={css.navLink}
                                href="#">
                                about us
                            </a>
                        </li>
                        <li>
                            <a
                                className={css.navLink}
                                href="#">
                                blog
                            </a>
                        </li>
                    </ul>
                </div>

                <ul className={css.btns}>
                    <li>
                        <div className={css.btnPenWrapper}>
                            <span className={css.btnText}>LET`S TALK</span>

                            <button className={clsx(css.btn, css.btnPen)}>
                                <svg
                                    className={clsx(
                                        css.btnIcon,
                                        css.btnIconPen
                                    )}>
                                    <use href={`${sprite}#icon-pen`}></use>
                                </svg>
                            </button>
                        </div>
                    </li>
                    <li>
                        <button className={clsx(css.btn, css.btnMenu)}>
                            <svg className={clsx(css.btnIcon, css.btnIconMenu)}>
                                <use href={`${sprite}#icon-menu`}></use>
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
};
