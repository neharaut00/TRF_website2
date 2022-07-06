import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import './assets/fonts/Joyride Extended Typeface/Joyride-Regular.otf';
import './assets/fonts/Greycliff_CF/Greycliff v1.1w/OTF/GreycliffCF-Regular.otf';
import './index.css';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-regular-svg-icons';
import '@fortawesome/free-solid-svg-icons';
// import reportWebVitals from "./reportWebVitals";
import * as ReactDOMClient from 'react-dom/client';

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(

    <App />
 
);

// reportWebVitals();