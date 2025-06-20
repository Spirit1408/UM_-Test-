import css from "./MainForm.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { toast } from "react-toastify";

export const MainForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const inputs = form.querySelectorAll("input[required]");
        const emailInput = form.querySelector('input[type="email"]');

        let formIsValid = true;

        inputs.forEach((input) => {
            if (!input.value.trim()) {
                input.classList.add(css.invalid);
                formIsValid = false;
            } else {
                input.classList.remove(css.invalid);
            }
        });

        if (!formIsValid) {
            toast.error("Please fill in all required fields.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput && !emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add(css.invalid);
            toast.error("Please enter a valid email address.");
            return;
        }

        form.reset();
        toast.success("Form submitted successfully!");
    };

    return (
        <div className={css.formWrapper}>
            <h2 className={css.formTitle}>
                Ready to discuss your project with us?
            </h2>

            <form
                className={css.form}
                onSubmit={handleSubmit}
                noValidate>
                <div className={css.header}>
                    <div className={css.inputGroup}>
                        <input
                            className={css.input}
                            type="text"
                            placeholder="Full Name*"
                            required
                        />
                        <input
                            className={css.input}
                            type="email"
                            placeholder="E-mail*"
                            required
                        />
                    </div>

                    <input
                        className={css.input}
                        type="text"
                        placeholder="Link your store"
                    />

                    <textarea
                        className={css.textarea}
                        placeholder="About project"></textarea>
                </div>

                <div className={css.footer}>
                    <p className={css.policy}>
                        By sending this form I confirm that I have read and
                        accept the{" "}
                        <a
                            className={css.policyLink}
                            href="#">
                            Privacy Policy
                        </a>
                    </p>

                    <button
                        type="submit"
                        className={css.btn}>
                        <p>Send a message</p>

                        <div className={css.btnIconWrapper}>
                            <svg className={css.btnIcon}>
                                <defs>
                                    <linearGradient
                                        id="iconGradient"
                                        x1="0%"
                                        y1="0%"
                                        x2="100%"
                                        y2="100%">
                                        <stop
                                            offset="0.01%"
                                            stopColor="#15dcdf"
                                        />
                                        <stop
                                            offset="61.5%"
                                            stopColor="#0ddc7a"
                                        />
                                        <stop
                                            offset="100%"
                                            stopColor="#15dcdf"
                                        />
                                    </linearGradient>
                                </defs>
                                <use
                                    href={`${sprite}#icon-pen`}
                                    fill="url(#iconGradient)"></use>
                            </svg>
                        </div>
                    </button>
                </div>
            </form>
        </div>
    );
};
