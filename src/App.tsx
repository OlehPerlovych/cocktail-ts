import './App.css';
import React from 'react';
import Router from "./general/navigation/router";
import Navigation from "./general/navigation/Navigation";

function App() {
    return (
        <>
            <Navigation/>
            <Router/>
        </>
    );
}

export default App;
