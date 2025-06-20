import css from './Footer.module.css'
import sprite from '../../assets/icons/sprite.svg'
import { useContext } from 'react';
import { ModalContext } from '../../App';

export const Footer = () => {
    const { openModal } = useContext(ModalContext);
    
    return <footer className={css.footer}>
        <div className={css.footerInfo}>
            <h2 className={css.title}>Let's discuss your project</h2>

            <button className={css.btn} type="button" onClick={() => {openModal()}}>
                <div className={css.btnIconWrapper}>
                    <svg className={css.btnIcon}>
                        <defs>
                            <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#5cd6b3" />
                                <stop offset="0.01%" stopColor="#04b8c4" />
                                <stop offset="100%" stopColor="#4bfa8a" />
                            </linearGradient>
                        </defs>
                        <use href={`${sprite}#icon-pen`} fill="url(#iconGradient)"></use>
                    </svg>
                </div>

                <p className={css.btnText}>Let`s discuss</p>
            </button>

            <button type="button" className={css.email}>
                <svg className={css.emailIcon}>
                    <use href={`${sprite}#icon-copy`}></use>
                </svg>

                <p className={css.emailAddress}>team@unknown.marketing</p>
            </button>
        </div>

        <div className={css.footerMenu}>
            <p className={css.listTitle}>menu</p>

            <ul className={css.links}>
                <li>
                    <a href="#" className={css.link}>services</a>
                </li>

                <li>
                    <a href="#" className={css.link}>our approach</a>
                </li>

                <li>
                    <a href="#" className={css.link}>projects</a>
                </li>

                <li>
                    <a href="#" className={css.link}>about us</a>
                </li>

                <li>
                    <a href="#" className={css.link}>blog</a>
                </li>
            </ul>
        </div>

        <div className={css.footerSocial}>
            <p className={css.listTitle}>our social</p>

            <ul className={css.socialLinks}>
                <li className={css.socialLinkWrapper}>
                    <div className={css.socialLinkIconWrapper}>
                        <svg className={css.socialLinkIcon}>
                            <use href={`${sprite}#icon-instagram`}></use>
                        </svg>
                    </div>

                    <a className={css.socialLinkText}>Instagram</a>
                </li>

                <li className={css.socialLinkWrapper}>
                    <div className={css.socialLinkIconWrapper}>
                        <svg className={css.socialLinkIcon}>
                            <use href={`${sprite}#icon-telegram`}></use>
                        </svg>
                    </div>

                    <a className={css.socialLinkText}>Telegram</a>
                </li>

                <li className={css.socialLinkWrapper}>
                    <div className={css.socialLinkIconWrapper}>
                        <svg className={css.socialLinkIcon}>
                            <use href={`${sprite}#icon-linkedin`}></use>
                        </svg>
                    </div>

                    <a className={css.socialLinkText}>LinkedIn</a>
                </li>
            </ul>
        </div>

        <a href="#" className={css.terms}>Terms of Use</a>
    
        <a href="#" className={css.privacy}>Privacy Policy</a>

        <p className={css.copyright}>©2024 UM.  All rights reserved.</p>
    </footer>;
}