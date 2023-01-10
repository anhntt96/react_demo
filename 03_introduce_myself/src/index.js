import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppHeader from "./components/Header/header";
import reportWebVitals from "./reportWebVitals";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Qualification from "./components/Qualification/Qualification";
import Work from "./components/Work/Work";
import Testimotional from "./components/Testimotional/Testimotional";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AppHeader />
        <main className="main">
            <Home />
            <About />
            <Skills />
            <Services />
            <Qualification />
            <Work />
            <Testimotional />
            <Contact />
            <Footer />
        </main>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
