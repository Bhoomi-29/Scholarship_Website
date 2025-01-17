import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';



const Welcome = () => {
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        '/background1.jpg',
        '/background2.jpg',
        '/background3.jpg'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    const handleLogin = (role) => {
        navigate(`/${role}/login`);
    };

    const handleRegister = (role) => {
        navigate(`/${role}/register`);
    };

     const [activeFAQ, setActiveFAQ] = useState(null);

     const toggleFAQ = (index) => {
         if (activeFAQ === index) {
             setActiveFAQ(null); 
         } else {
             setActiveFAQ(index); 
         }
     };

    return (
        <div className="welcome-container">
            {/* Header */}
            <header className="header">
                <div className="top-bar">
                    <div className="logo-section">
                        <img src="/logo.png" alt="Logo" className="logo" />
                        <span className="website-name">Scholarship Portal</span>
                    </div>
                    <div className="contact-info">
                        <p>Helpline: 1800-123-456</p>
                        <p>Email: support@scholarship.com</p>
                    </div>
                </div>

                {/* Main Navigation */}
                <nav className="main-nav">
                    <ul className="nav-list">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#how-to-apply">How to Apply</a></li>
                        <li><a href="#scholarships">Scholarships</a></li>
                        <li><a href="#contact">Contact</a></li>
                        
                        {/* Dropdown for roles */}
                        <li className="dropdown">
                            <a href="#student">Student</a>
                            <div className="dropdown-content">
                                <button onClick={() => handleRegister('student')}>Register</button>
                                <button onClick={() => handleLogin('student')}>Login</button>
                            </div>
                        </li>
                        <li className="dropdown">
                            <a href="#institution">Institution</a>
                            <div className="dropdown-content">
                                <button onClick={() => handleRegister('institution')}>Register</button>
                                <button onClick={() => handleLogin('institution')}>Login</button>
                            </div>
                        </li>
                        <li className="dropdown">
                            <a href="#officer">Officer</a>
                            <div className="dropdown-content">
                                <button onClick={() => handleRegister('officer')}>Register</button>
                                <button onClick={() => handleLogin('officer')}>Login</button>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Welcome Message */}
            <div
                className="welcome-image-container"
                style={{
                    backgroundImage: `url(${images[currentImageIndex]})`
                }}
            >
                <div className="welcome-overlay">
                    <h1>Welcome to the Scholarship Portal</h1> 
                     <p>Empowering Education Through Financial Aid.</p>
                </div>
            </div>
            <section className="info-boxes">
                     <div className="info-box">
                         <h3>Explore Schloarships</h3>
                         {/*<p>Explore Schloarships</p>*/}
                         <button className="info-box-btn">View</button>
                     </div>
                     <div className="info-box">
                         <h3>Application Status</h3>
                         {/*<p>Application Status</p> */}
                         <button className="info-box-btn">Check Now</button>
                     </div>
                     <div className="info-box">
                         <h3>Helpdesk</h3>
                         {/*<p>Helpdesk</p>*/}
                         <button className="info-box-btn">Contact Now</button>
                     </div>
                </section>

            {/* Main Content */}
            <main className="main-content">

                <section className="announcements">
                    <h2>Announcements</h2>
                    <ul>
                        <li>Deadline for Application: 31st January 2025</li>
                        <li>New Scholarship Schemes for 2025 now live!</li>
                        <li>Verify your documents for faster approval.</li>
                        <li>aaaaaaaaaa</li>
                        <li>aaaaaaaaaa</li>
                        <li>aaaaaaaaaa</li>
                        <li>aaaaaaaaaa</li>
                        <li>aaaaaaaaaa</li>

                    </ul>
                </section>

                <section className="how-to-apply">
                    <h2>How to Apply</h2>
                    <ol>
                        <li>Register using your valid email ID and mobile number.</li>
                        <li>Login to your dashboard and complete your profile.</li>
                        <li>Upload the required documents.</li>
                        <li>Submit your application before the deadline.</li>
                        <li>Track your application status in real time.</li>
                    </ol>
                    <div className="how-to-apply-content">
                         <img src="backgrond1.jpg" alt="How to Apply" className="how-to-apply-image" />
                     </div>
                </section>
            </main>
            {/* Gallery Section */}
            <section className="gallery">
                 <h2>Gallery</h2>
                 <div className="gallery-container">
                     <div className="gallery-item">
                         <img src="background1.jpg" alt="Gallery Image 1" className="gallery-image" />
                     </div>
                     <div className="gallery-item">
                         <img src="background2.jpg" alt="Gallery Image 1" className="gallery-image" />
                     </div>
                     <div className="gallery-item">
                         <img src="background3.jpg" alt="Gallery Image 1" className="gallery-image" />
                     </div>
                </div>
            </section>

            {/*Faq*/}
            <section className="faq">

                 <h2>Frequently Asked Questions</h2>
                 <div className="faq-container">
                     <div className="faq-item">
                         <div className="faq-question" onClick={() => toggleFAQ(0)}>
                             <h3>What is the scholarship application process?</h3>
                         </div>
                             {activeFAQ === 0 && (
                                 <div className="faq-answer">
                                     <p>Here is the detailed process for applying to the scholarship...</p>
                                 </div>
                             )}
                         </div>
                 </div>
                 <div className="faq-container">
                     <div className="faq-item">
                         <div className="faq-question" onClick={() => toggleFAQ(1)}>
                             <h3>What is the scholarship application process?</h3>
                         </div>
                             {activeFAQ === 1 && (
                                 <div className="faq-answer">
                                     <p>Here is the detailed process for applying to the scholarship...</p>
                                 </div>
                             )}
                         </div>
                 </div>
            </section>
            

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <p>© 2025 Scholarship Portal. All rights reserved.</p>
                    <p>Contact us: support@scholarshipportal.com | +1-800-123-4567</p>
                    <div className="social-links">
                        <a href="#facebook">Facebook</a> | <a href="#twitter">Twitter</a> | <a href="#linkedin">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Welcome;
