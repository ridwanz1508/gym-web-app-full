import React, { useState } from "react";

function Footer() {
    const [selectedLanguage, setSelectedLanguage] = useState("English");

    const handleChangeLanguage = (event) => {
        setSelectedLanguage(event.target.value);
    };
    return(
        <div id="footer">
            <div className="footer-text">
                <p>Questions? Call <span className="phone-number">8888-8888-8888</span></p>
            </div>
            <div className="footer-row">
                <div className="footer-col">
                    <a href="/" className="footer-link">FAQ</a>
                    <a href="/" className="footer-link">Investor Relations</a>
                    <a href="/" className="footer-link">Privacy</a>
                    <a href="/" className="footer-link">Speed Test</a>
                </div>
                <div className="footer-col">
                    <a href="/" className="footer-link">Help Center</a>
                    <a href="/" className="footer-link">Jobs</a>
                    <a href="/" className="footer-link">Cookies Preferences</a>
                    <a href="/" className="footer-link">Legal Notices</a>
                </div>
                <div className="footer-col">
                    <a href="/" className="footer-link">MyGym Centre</a>
                    <a href="/membership" className="footer-link">Join Membership</a>
                    <a href="/register" className="footer-link">Register Us</a>
                </div>
            </div>
            <div className="footer-nav">
                <select
                    className="language-dropdown"
                    value={selectedLanguage}
                    onChange={handleChangeLanguage}
                >
                    <option value="English"> English</option>
                    <option value="Indonesian">Indonesian</option>
                </select>
                <p>MyGym Indonesia</p>
            </div>
        </div>
    );
}

export default Footer;
