import React, { useState, useEffect } from 'react';

import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import ResumeSection from "./components/ResumeSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
    const [sections] = useState([
        { id: 'ABOUT_SECTION', name: 'About Me' },
        { id: 'PORTFOLIO_SECTION', name: 'Portfolio' },
        { id: 'RESUME_SECTION', name: 'Resume' },
        { id: 'CONTACT_SECTION', name: 'Contact' },
    ]);
    const [currentTarget, setCurrentTarget] = useState(sections[0].id);
    const [currentSection, setcurrentSection] = useState(sections[0]);

    useEffect(() => {
        document.title = currentSection.name;
    }, [currentSection]);

  return (
    <div className="app-global">
        <div className="global-container">
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Header
                sections={sections}
                currentTarget={currentTarget}
                setCurrentTarget={setCurrentTarget}
                setcurrentSection={setcurrentSection}
            />
            <main className="main-container">
                {(currentTarget === 'ABOUT_SECTION') && (<AboutSection />)}
                {(currentTarget === 'PORTFOLIO_SECTION') && (<PortfolioSection/>)}
                {(currentTarget === 'RESUME_SECTION') && (<ResumeSection/>)}
                {(currentTarget === 'CONTACT_SECTION') && (<ContactSection/>)}
            </main>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
