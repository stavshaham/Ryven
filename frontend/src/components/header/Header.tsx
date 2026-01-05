import {useState} from "react";
import "./Header.css"
import logo from '../../assets/ryven_logo.png'
import {Link} from "react-router-dom";

function Header() {
    const [active, setActive] = useState(0)
    const [activeMobile, setActiveMobile] = useState(false);

    const navItems = [
        {id: 0, title: "Home", path: "/"},
        {id: 2, title: "Features", path: "/features"},
        {id: 1, title: "About", path: "/about"},
        {id: 3, title: "Contact", path: "/contact"},
        {id: 4, title: "Login", path: "/login"},
        {id: 5, title: "Register", path: "/register"},
    ]

    const mobileNavItems = [
        {id: 0, title: "Home", path: "/"},
        {id: 1, title: "About", path: "/about"},
        {id: 2, title: "Features", path: "/features"},
        {id: 3, title: "Contact", path: "/contact"},
        {id: 4, title: "Login", path: "/login"},
        {id: 5, title: "Register", path: "/register"},
    ]

    return (
        <header className={'header'}>
            <img src={logo} alt={'Ryven Logo'} className={'logo'} />

            <div className={'navigation'}>
                {navItems.map(item => (
                    <Link
                        to={item.path}
                        key={item.id}
                        className={`nav-item ${active === item.id ? "active" : ""}`}
                        onClick={() => setActive(item.id)}
                    >
                        {item.title}
                    </Link>
                ))}
            </div>

            <div className={`mobile-menu ${activeMobile ? "active" : ""}`}>
                {mobileNavItems.map(item => (
                    <Link
                        to={item.path}
                        key={item.id}
                        className={`mobile-nav-item ${active === item.id ? "active" : ""}`}
                        onClick={() => setActive(item.id)}
                    >
                        {item.title}
                    </Link>
                ))}
            </div>

            <div className={'empty'}></div>

            <div className={`hamburger-menu ${activeMobile ? "active" : ""}`} onClick={() => setActiveMobile(!activeMobile)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}

export default Header
