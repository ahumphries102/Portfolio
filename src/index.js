import React from 'react';
// 1. Change the import path for ReactDOM
import { createRoot } from 'react-dom/client'; 
import App from './Components/MainContainer';
import './App.css'
const container = document.getElementById('root');
// 2. Create a root
const root = createRoot(container); 
// 3. Render the application
root.render(<App />);