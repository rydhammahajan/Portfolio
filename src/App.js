import React from "react";
import ReactDOM from "react-dom/client"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Description from "./components/Description";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const AppLayout = ()=> {

    return (
        <>
        <NavBar/>
        <Description/>
        <Skills/>
        <Projects/>
        <Footer/>
        </>
    )
   
}

const root = ReactDOM.createRoot(document.getElementById("root")) ; 

root.render(<AppLayout/>) ;