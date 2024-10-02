import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";
import InfiniteMovingTechnologies from "./components/InfiniteMovingTechnologies";
import ContactSection from "./components/ContactSection";
import FloatingNav from "./components/FloatingNav";
import AllProjectsPage from "./components/AllProjectsPage"; // Assurez-vous d'avoir ce composant
import "./App.css";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            <FeaturedProjects />
                            <InfiniteMovingTechnologies />
                            <ContactSection />
                        </>
                    }
                />
                <Route path="/projects" element={<AllProjectsPage />} />
                {/* Redirection par défaut pour les URL non définies */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <FloatingNav />
        </Router>
    );
}

export default App;
