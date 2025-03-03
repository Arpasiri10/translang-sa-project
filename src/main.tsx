import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './Login'
import Register from './Register'
import LandingPage from './LandingPage'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import AuthRoute from './AuthRoute'

const firebaseConfig = {
  apiKey: "AIzaSyCWjSJQmVKvfDa055YCSQZo5f63kWWw8d8",
  authDomain: "authentication-82e05.firebaseapp.com",
  projectId: "authentication-82e05",
  storageBucket: "authentication-82e05.firebasestorage.app",
  messagingSenderId: "860003906118",
  appId: "1:860003906118:web:947c8cf1577fac54ba5047",
  measurementId: "G-RPGP71H86C"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<AuthRoute><App /></AuthRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
