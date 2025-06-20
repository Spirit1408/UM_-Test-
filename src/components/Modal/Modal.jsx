import { useEffect, useRef, useState } from "react";
import css from "./Modal.module.css";
import sprite from "../../assets/icons/sprite.svg";

export const Modal = ({ children, onClose }) => {
    const modalRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const timer = setTimeout(() => {
            setIsActive(true);
        }, 10);

        const handleEscKey = (e) => {
            if (e.key === "Escape") {
                handleClose();
            }
        };

        document.addEventListener("keydown", handleEscKey);

        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", handleEscKey);
            clearTimeout(timer);
        };
    }, [onClose]);

    const handleClose = () => {
        setIsActive(false);
        setTimeout(onClose, 300);
    };

    const handleOverlayClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            handleClose();
        }
    };

    return (
        <div
            className={`${css.modalOverlay} ${isActive ? css.active : ""}`}
            onClick={handleOverlayClick}>
            <div
                className={css.modalWrapper}
                ref={modalRef}>
                {children}

                <button
                    className={css.closeBtn}
                    onClick={handleClose}>
                    <svg className={css.closeBtnIcon}>
                        <use href={`${sprite}#icon-close`}></use>
                    </svg>
                </button>
            </div>
        </div>
    );
};
