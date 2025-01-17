import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/student/login" element={<Login />} />
                <Route path="/student/register" element={<Register />} />
                <Route path="/institution/login" element={<Login />} />
                <Route path="/institution/register" element={<Register />} />
                <Route path="/officer/login" element={<Login />} />
                <Route path="/officer/register" element={<Register />} />
            </Routes>
        </Router>
    );
};

export default App;
