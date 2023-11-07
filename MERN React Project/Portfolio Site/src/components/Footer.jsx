import '../style/FooterStyle.css';
import footerLogo from '../assets/Logo.svg'
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='footer__section'>
            <div className="container-w footer__wrapper">
                <div className="footer__image">
                    <img src={footerLogo} alt="" className="footer__logo" />
                </div>
                <div className="footer__navbar">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="" className="footer__link"> Home </a>
                        </li>
                        <li className="footer__item">
                            <a href="" className="footer__link"> Portfolio </a>
                        </li>
                        <li className="footer__item">
                            <a href="" className="footer__link"> About me </a>
                        </li>
                        <li className="footer__item">
                            <a href="" className="footer__link"> Contact </a>
                        </li>
                        <li className="footer__item">
                            <a href="" className="footer__link"> Testimonial </a>
                        </li>
                    </ul>
                </div>

                <div className="footer__social__links">
                    <ul className="social__link__list">
                        <li className="social__item">
                            <a href="" className='social__link'> {<FaFacebookF />} </a>
                        </li>
                        <li className="social__item">
                            <a href="" className='social__link'> {<FaInstagram />} </a>
                        </li>
                        <li className="social__item">
                            <a href="" className='social__link'> {<FaTwitter />} </a>
                        </li>
                        <li className="social__item">
                            <a href="" className='social__link'> {<FaLinkedin />} </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;