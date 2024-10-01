import { useState } from "react";
import FloatingNav from "./components/FloatingNav";
import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";
import InfiniteMovingTechnologies from "./components/InfiniteMovingTechnologies";
import ContactSection from "./components/ContactSection";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <> 
      <Header />
      <Hero />
      <FeaturedProjects />
      <InfiniteMovingTechnologies />
      <ContactSection />
      <FloatingNav />
    </>
  );
}

export default App;
