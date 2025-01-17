import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [role, setRole] = useState('student'); // Default role
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { ...formData, userType: role };

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (response.ok) {
                alert(`Logged in successfully as ${role}`);
                // Redirect to relevant dashboard based on role
                if (role === 'student') {
                    window.location.href = '/student-dashboard';
                } else if (role === 'institution') {
                    window.location.href = '/institution-dashboard';
                } else if (role === 'officer') {
                    window.location.href = '/officer-dashboard';
                }
            } else {
                alert(result.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred during login');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="role">Select Role</label>
                        <select id="role" value={role} onChange={handleRoleChange}>
                            <option value="student">Student</option>
                            <option value="institution">Institution</option>
                            <option value="officer">Officer</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
