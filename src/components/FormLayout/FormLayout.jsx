import sprite from '../../assets/icons/sprite.svg'
import css from './FormLayout.module.css'

export const FormLayout = ({children}) => {
    return <div className={css.formLayout}>
            {children}

            <div className={css.review}>
                <div>
                    <div className={css.reviewTitle}>
                        <svg className={css.reviewTitleIcon}>
                            <use href={`${sprite}#icon-label-up`}></use>
                        </svg>
                        
                        <h3 className={css.reviewTitleText}><span>Our</span> {" "} clients say</h3>
                    </div>
    
                    <div className={css.reviewScore}>
                        <svg className={css.reviewScoreIcon}>
                            <use href={`${sprite}#icon-star`}></use>
                        </svg>
    
                        <p className={css.reviewScoreValue}>5.0</p>
    
                        <svg className={css.logo}>
                            <use href={`${sprite}#icon-upwork`}></use>
                        </svg>
                    </div>
    
                    <p className={css.reviewText}>"I had a positive experience working with Victor and his team. <span>They were always quick to respond and very professional in their work. I would recommend them to others."</span></p>
                </div>

                <div className={css.geo}>
                    <svg className={css.geoIcon}>
                        <use href={`${sprite}#icon-geo`}></use>
                    </svg>

                    <p className={css.geoText}>United Kingdom</p>
                </div>
            </div>
        </div>
}