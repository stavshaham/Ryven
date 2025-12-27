import {Link} from "react-router-dom";
import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <h1 className="hero-title">Connect. Chat. <span className={'brand'}> <br />Ryven.</span></h1>
            <p className={'hero-subtitle'}>A modern chat experience built for speed and simplicity.</p>

            <div className={'cta-buttons'}>
                <Link
                    to="/"
                    className={'btn-primary'}
                >
                    Get Started
                </Link>
                <Link
                    to="/about"
                    className={'btn-secondary'}
                >
                    Learn More
                </Link>
            </div>
        </section>

    );
}

export default Hero;
