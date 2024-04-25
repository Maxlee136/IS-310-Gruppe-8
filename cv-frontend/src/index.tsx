// @ts-ignore
import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom'; // Correct import for ReactDOM
import './index.css';
import App from './App'; // Make sure 'App' matches the file name 'App.tsx'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// The rest of your code for service workers or vitals...
