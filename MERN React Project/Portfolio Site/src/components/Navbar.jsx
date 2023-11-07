import { useState } from "react";
import Logo from '../assets/Logo.svg'
import { Link } from "react-router-dom";
import '../style/NavbarStyle.css'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const Links = [
        {
            path: "/", display: "Home"
        },
        {
            path: "/portfolio", display: "Portfolio"
        },
        {
            path: "/about", display: "About me"
        },
        {
            path: "/testimonials", display: "Testimonials"
        },
    ]


    // toggle menu button
    const [isopenMenu, setIsOpenMenu] = useState(false);
    const toggleMenu = () => {
        setIsOpenMenu(!isopenMenu);
    }

    // Header scroll effect
    let [isSticky, setIsSticky] = useState(false);
    let scrollEffect = () => {
        window.scrollY >= 100 ? setIsSticky(true) : setIsSticky(false);
    }
    window.addEventListener("scroll", scrollEffect)



    return (
        <header className={isSticky ? "header__wrapper scroll-effect" : "header__wrapper"} >
            <div className="container-w header__flex">


                {/* Logo */}
                <div className="logo">
                    <img src={Logo} alt="Header Logo" className="header__logo" />
                </div>

                {/* navigation */}
                <nav className={isopenMenu ? "nav__bar active" : "nav__bar"}>
                    <ul className="nav__list">
                        {
                            Links.map((value, index) => (
                                <li className="nav__item" key={index}>
                                    <Link className="nav__link" to={value.path} >{value.display}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    {/* Contact Button */}
                    <div className="contact-btn extra">
                        <Link className="btn" >Contact Me</Link>
                    </div>

                </nav>

                {/* Contact Button */}
                <div className="contact-btn">
                    <Link className="btn" >Contact Me</Link>
                </div>



                {/* Hamburg menu and close menu */}
                <div className="hamburg-menu" onClick={toggleMenu}>

                    {isopenMenu ? (<FaTimes />) : (<FaBars />)}

                </div>
            </div>
        </header>
    );
};

export default Navbar;