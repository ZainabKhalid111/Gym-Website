import React from 'react';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import logo from '../../assets/logo.png';
import './footer.css'

const Footer = () => {
    return (
        <div className="Footer-container">
            <hr />
            <div className="footer">
                <div className="social-links">
                    <img src={Github} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={LinkedIn} alt="" />
                </div>

                <div className="logo-footer"><img src={logo} alt="" />
                </div>
            </div>

            <div className="blur" style={{ width: '22rem', height: '30rem', left: '60rem',bottom:'30px' }}>
            </div>

            <div className="blur" style={{ width: '22rem', height: '30rem', left: '0', bottom: '20px' }}>
            </div>
        </div>
    )
}

export default Footer