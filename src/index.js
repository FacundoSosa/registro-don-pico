import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDhWsXBZKqrdiUkCsltFavc1-Nn0X_s_SE",
  authDomain: "registro-don-pico.firebaseapp.com",
  projectId: "registro-don-pico",
  storageBucket: "registro-don-pico.appspot.com",
  messagingSenderId: "673759629291",
  appId: "1:673759629291:web:66cf69ff9cf1e87df753ae"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
