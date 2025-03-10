import React from 'react'
import '../App.css';
import heroImage from '../assets/hero-img.svg';
import appScreenshot1 from '../assets/app1.svg';
import appScreenshot2 from '../assets/app2.svg';
import appScreenshot3 from '../assets/app3.svg';
const Main = () => {
    return (
        <main>
            <section className="hero" id="home">
                <div className="container">
                    <h2>Food app</h2>
                    <h1>Why stay hungry when you can order form Bella Onojie</h1>
                    <p>Download the bella onojie's food app now on</p>
                    <div className="cta-buttons">
                        <a href="#download" className="btn-primary">Playstore</a>
                        <a href="#download" className="btn-secondary">App store</a>
                    </div>
                    <div className="app-showcase">
                        <img src={heroImage} alt="App Showcase" />
                    </div>
                </div>
            </section>

            <div className="divider"></div>

            <section className="how-it-works" id="product">
                <div className="container">
                    <h2>How the app works</h2>

                    <div className="app-feature">
                        <div className="app-screenshot">
                            <img src={appScreenshot1} alt="Create account screen" />
                        </div>
                        <div className="feature-text">
                            <span className="feature-label">Create an account</span>
                            <h3>Create/login to an existing account to get started</h3>
                            <p>An account is created with your email and a desired password</p>
                        </div>
                    </div>

                    <div className="app-feature reverse">
                        <div className="feature-text">
                            <span className="feature-label">Explore varieties</span>
                            <h3>Shop for your favorites meal as e dey hot.</h3>
                            <p>Shop for your favorite meals or drinks and enjoy while doing it.</p>
                        </div>
                        <div className="app-screenshot">
                            <img src={appScreenshot2} alt="Explore varieties screen" />
                        </div>
                    </div>

                    <div className="app-feature">
                        <div className="app-screenshot">
                            <img src={appScreenshot3} alt="Checkout screen" />
                        </div>
                        <div className="feature-text">
                            <span className="feature-label">Checkout</span>
                            <h3>When you done check out and get it delivered.</h3>
                            <p>When you done check out and get it delivered with ease.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="download" id="download">
                <div className="container">
                    <h2>Download the app now.</h2>
                    <p>Available on your favorite store. Start your premium experience now</p>
                    <div className="download-buttons">
                        <a href="#playstore" className="btn-primary">Playstore</a>
                        <a href="#appstore" className="btn-secondary">App store</a>
                    </div>
                </div>
            </section>
        </main>
    );

}

export default Main