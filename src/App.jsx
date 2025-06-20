import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { WorkSteps } from "./components/WorkSteps/WorkSteps";
import { ConsultationForm } from "./components/ConsultationForm/ConsultationForm";
import { ToastContainer } from "react-toastify";
import { Modal } from "./components/Modal/Modal";
import { FormLayout } from "./components/FormLayout/FormLayout";
import { useState, createContext } from "react";
import { PopupForm } from "./components/PopupForm/PopupForm";
import { Footer } from "./components/Footer/Footer";

export const ModalContext = createContext();

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
            <Header />

            <main>
                <Hero />
                <AboutUs />
                <WorkSteps />
                <ConsultationForm />
            </main>

            <Footer />

            <ToastContainer
                position="bottom-right"
                autoClose={5000}
            />

            {isModalOpen && (
                <Modal onClose={closeModal}>
                    <FormLayout>
                        <PopupForm />
                    </FormLayout>
                </Modal>
            )}
        </ModalContext.Provider>
    );
}

export default App;
