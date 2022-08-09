import title from "../img/title.png"

function Header() {

    return (
        <header>
            <div id="header-content" className="clamp-content">
                <img src={title} alt="Duty Complete logo" />
            </div>
        </header>
    );
}

export default Header;
