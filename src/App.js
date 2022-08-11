import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavigation from "./shared/Navigation/MainNavigation";

import Wellcome from "./wellcome/Wellcome";
import About from "./about/About";
import Skills from "./skills/Skills";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";
import Footer from "./shared/Footer/Footer";
import { LanguageProvider } from "./shared/context/Language";

import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <MainNavigation />
        <Wellcome />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        {/* <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes> */}

        {/* <Footer /> */}
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
