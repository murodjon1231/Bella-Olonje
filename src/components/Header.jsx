import React from 'react'
import logo from '../assets/logo.svg';
const header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="Bella Onojie" />
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="#home" className="active">Home</a></li>
                        <li><a href="#product">Product</a></li>
                        <li><a href="#faq">Faq</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default header