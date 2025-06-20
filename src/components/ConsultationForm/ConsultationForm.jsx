import css from "./ConsultationForm.module.css";
import { FormLayout } from "../FormLayout/FormLayout";
import { MainForm } from "../MainForm/MainForm";

export const ConsultationForm = () => {
    return (
        <section className={css.consultationFormOverlay}>
            <div className={css.consultationFormWrapper}>
                <FormLayout>
                    <MainForm />
                </FormLayout>
            </div>
        </section>
    );
};
