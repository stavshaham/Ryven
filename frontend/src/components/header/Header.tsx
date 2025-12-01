import "./Header.css"
function Header() {
    return (
        <header className={'header'}>
            <div className={'navigation'}>
                <div className={'title'}>Home</div>
                <div className={'title'}>About</div>
                <div className={'title'}>Features</div>
                <div className={'title'}>Contact</div>
            </div>
        </header>
    )
}

export default Header
