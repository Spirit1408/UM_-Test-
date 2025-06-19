import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { WorkSteps } from "./components/WorkSteps/WorkSteps";
import { ConsultationForm } from "./components/ConsultationForm/ConsultationForm";
import { ToastContainer } from 'react-toastify';


function App() {
    return (
        <>
            <Header />
            <Hero />
            <AboutUs />
            <WorkSteps />
            <ConsultationForm />

            <ToastContainer position="bottom-right" autoClose={5000} />
        </>
    );
}

export default App;
