import css from './PopupForm.module.css'
import sprite from '../../assets/icons/sprite.svg'
import { useState } from 'react'
import { toast } from 'react-toastify'

export const PopupForm = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionChange = (option) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter(item => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const emailInput = form.querySelector('input[type="email"]');                
        if (!emailInput.value.trim()) {
            emailInput.classList.add(css.invalid);
            toast.error('Please fill the email field.');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add(css.invalid);
            toast.error('Please enter a valid email address.');
            return;
        }
        
        emailInput.classList.remove(css.invalid);

        form.reset();
        setSelectedOptions([]);
        toast.success('The form has been submitted successfully!');
    };

    return <div className={css.formWrapper}>
        <h2 className={css.formTitle}>Ready to discuss your project with us?</h2>

        <form className={css.form} onSubmit={handleSubmit} noValidate>
            <div className={css.selectGroup}>
                <p className={css.label}>Choose your industry</p>

                <ul className={css.optionsList}>
                    <li>
                        <label className={`${css.option} ${selectedOptions.includes('Clothing') ? css.selected : ''}`}>
                            <input 
                                type="checkbox" 
                                className={css.optionCheckbox} 
                                checked={selectedOptions.includes('Clothing')}
                                onChange={() => handleOptionChange('Clothing')}
                            />
                            Clothing
                        </label>
                    </li>

                    <li>
                        <label className={`${css.option} ${selectedOptions.includes('Cosmetics') ? css.selected : ''}`}>
                            <input 
                                type="checkbox" 
                                className={css.optionCheckbox} 
                                checked={selectedOptions.includes('Cosmetics')}
                                onChange={() => handleOptionChange('Cosmetics')}
                            />
                            Cosmetics
                        </label>
                    </li>

                    <li>
                        <label className={`${css.option} ${selectedOptions.includes('B2B') ? css.selected : ''}`}>
                            <input 
                                type="checkbox" 
                                className={css.optionCheckbox} 
                                checked={selectedOptions.includes('B2B')}
                                onChange={() => handleOptionChange('B2B')}
                            />
                            B2B
                        </label>
                    </li>

                    <li>
                        <label className={`${css.option} ${selectedOptions.includes('Electronics') ? css.selected : ''}`}>
                            <input 
                                type="checkbox" 
                                className={css.optionCheckbox} 
                                checked={selectedOptions.includes('Electronics')}
                                onChange={() => handleOptionChange('Electronics')}
                            />
                            Electronics
                        </label>
                    </li>

                    <li>
                        <label className={`${css.option} ${selectedOptions.includes('Other sectors') ? css.selected : ''}`}>
                            <input 
                                type="checkbox" 
                                className={css.optionCheckbox} 
                                checked={selectedOptions.includes('Other sectors')}
                                onChange={() => handleOptionChange('Other sectors')}
                            />
                            Other sectors
                        </label>
                    </li>
                </ul>
            </div>

            <div className={css.emailInput}>
                <p className={css.label}>Contact me back at</p>
                <input className={css.input} type="email" placeholder="Your E-mail" required/>
            </div>

            <div className={css.btnsWrapper}>
             <button type="submit" className={css.submitBtn}><p>Send a message</p> 
                <div className={css.btnIconWrapper}>
                    <svg className={css.btnIcon}>
                        <defs>
                                <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0.01%" stopColor="#15dcdf" />
                                    <stop offset="61.5%" stopColor="#0ddc7a" />
                                    <stop offset="100%" stopColor="#15dcdf" />
                                </linearGradient>
                            </defs>
                        <use className={css.btnIcon} href={`${sprite}#icon-pen`} fill="url(#iconGradient)"></use>
                    </svg>
                </div>
             </button>  

             <div className={css.callBtnWrapper}>
                <button type="button" className={css.callBtn}>
                    <svg className={css.callBtnIcon}>
                        <defs>
                                <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0.01%" stopColor="#15dcdf" />
                                    <stop offset="61.5%" stopColor="#0ddc7a" />
                                    <stop offset="100%" stopColor="#15dcdf" />
                                </linearGradient>
                            </defs>
                        <use href={`${sprite}#icon-call`} stroke="url(#iconGradient)"></use>
                    </svg>
                </button>

                <p className={css.callBtnDescr}>Or you can Book a <span>Free Demo Call</span> at convenient time</p>
             </div>

             <p className={css.policy}>By sending this form I confirm that I have read and accept the <a href="#">Privacy Policy</a></p>
            </div>
        </form>
    </div>;
}