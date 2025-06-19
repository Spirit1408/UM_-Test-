import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { WorkSteps } from "./components/WorkSteps/WorkSteps";
import { ConsultationForm } from "./components/ConsultationForm/ConsultationForm";
import { ToastContainer } from 'react-toastify';
import { Modal } from "./components/Modal/Modal";
import { FormLayout } from "./components/FormLayout/FormLayout";
import { useState, createContext } from "react";

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
            <Hero />
            <AboutUs />
            <WorkSteps />
            <ConsultationForm />

            <ToastContainer position="bottom-right" autoClose={5000} />

            {isModalOpen && (
                <Modal onClose={closeModal}>
                    <FormLayout />
                </Modal>
            )}
        </ModalContext.Provider>
    );
}

export default App;
