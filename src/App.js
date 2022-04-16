import React, {useState} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';
import Shop from "./components/Shop";

function App() {
    return (
        <>
            <Header/>
            <Shop/>
            <Footer/>
        </>
    );
}

export default App;

