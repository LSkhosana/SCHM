import '../CSS/(1)NavBar.css'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <img id='logo' src={logo} alt='logo'/>
            <nav ref={navRef}>
                <div className="links">
                    <a id='h'href="/">Home</a>
                    <a href="/#h5">About</a>
                    <a href="/#serv">Services</a>
                    <a href="/contact">Shop</a>
                    <a href="/">
                    Offers <FontAwesomeIcon icon={faDownload} style={{ marginLeft: '5px' }} />
                    </a>                    
                    <Link to="/" className="sign-in-link">Contact</Link>
                </div>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
            <div className="log-in desktop-only">
            <a href="/offers.pdf" download>
                Offers <FontAwesomeIcon icon={faDownload} style={{ marginLeft: '5px' }} />
            </a>
                <button className="add-btn">
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Contact
                    </Link>
                </button>
            </div>
        </header>
    );
}

export default Navbar;