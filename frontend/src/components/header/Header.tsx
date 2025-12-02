import {useState} from "react";
import "./Header.css"
import logo from '../../assets/ryven_logo.png'

function Header() {
    const [active, setActive] = useState("Home")
    const navItems = ["Home", "About", "Features", "Contact"]
    const authItems = ["Login", "Register"]

    return (
        <header className={'header'}>
            <img src={logo} alt={'Ryven Logo'} className={'logo'} />

            <div className={'navigation'}>
                {navItems.map(item => (
                    <div
                        key={item}
                        className={`nav-item ${active === item ? "active" : ""}`}
                        onClick={() => setActive(item)}
                    >
                        {item}
                    </div>
                ))}
            </div>

            <div className={'auth-buttons'}>
                {authItems.map(item => (
                    <div
                        key={item}
                        className={`auth-button ${active === item ? "active" : ""}`}
                        onClick={() => setActive(item)}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </header>
    )
}

export default Header
