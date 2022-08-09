import githubLogo from '../img/github/GitHub-Mark-Light-32px.png';

function Footer() {

    return (
        <footer className="clamp-container">
            <div className="clamp-content" id="footer-content">
                <a title="View source code on GitHub" href="https://github.com/dutycomplete">
                    <img src={githubLogo} alt="GitHub logo" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
