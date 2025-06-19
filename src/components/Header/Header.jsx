import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import css from "./Header.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { ModalContext } from "../../App";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
    const { openModal } = useContext(ModalContext);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        handleScroll();
        handleResize();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header
            className={clsx(css.headerOverlay, scrolled && css.headerScrolled)}>
            <div className={css.header}>
                <div className={css.logoWrapper}>
                    <svg className={css.logo}>
                        <use href={`${sprite}#icon-logo`} />
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
                        <motion.div
                            className={css.btnPenWrapper}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={openModal}>
                            <AnimatePresence>
                                {isDesktop && (
                                    <motion.span
                                        key="btnText"
                                        className={clsx(
                                            css.btnText,
                                            css.visibleText
                                        )}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        transition={{ duration: 0.3 }}>
                                        LET'S TALK
                                    </motion.span>
                                )}
                            </AnimatePresence>

                            <button 
                                className={clsx(css.btn, css.btnPen)}
                            >
                                <svg
                                    className={clsx(
                                        css.btnIcon,
                                        css.btnIconPen
                                    )}>
                                    <use href={`${sprite}#icon-pen`} />
                                </svg>
                            </button>
                        </motion.div>
                    </li>

                    <AnimatePresence>
                        {!isDesktop && (
                            <motion.li
                                key="menuBtn"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.25 }}>
                                <button className={clsx(css.btn, css.btnMenu)}>
                                    <svg
                                        className={clsx(
                                            css.btnIcon,
                                            css.btnIconMenu
                                        )}>
                                        <use href={`${sprite}#icon-menu`} />
                                    </svg>
                                </button>
                            </motion.li>
                        )}
                    </AnimatePresence>
                </ul>
            </div>
        </header>
    );
};
