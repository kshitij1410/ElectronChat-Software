import React from 'react';
// import ReactDOM from "react-dom";

// ReactDOM.render(<h1>Hi this is kshitij </h1>,document.getElementById('electronChat'));
import App from './App';

import './index.scss';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'
createRoot(document.getElementById('chatApp')).render(<App/>)