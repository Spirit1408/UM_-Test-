import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { WorkSteps } from "./components/WorkSteps/WorkSteps";
import { ConsultationForm } from "./components/ConsultationForm/ConsultationForm";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <AboutUs />
            <WorkSteps />
            <ConsultationForm />
        </>
    );
}

export default App;
