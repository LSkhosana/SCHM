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
                    <a href="#serv">Services</a>
                    <a href="#about">About Us</a>
                    <a href="/">Shop</a>
                    <a href="/offers.pdf" download>
                    Offers <FontAwesomeIcon icon={faDownload} style={{ marginLeft: '5px' }} />
                    </a>                    
                    <Link to="/contact" className="sign-in-link">Contact</Link>
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
                    <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Contact
                    </Link>
                </button>
            </div>
        </header>
    );
}

export default Navbar;