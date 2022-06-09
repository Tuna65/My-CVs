import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import wave from '../../img/wave.png';

function Footer() {
    return (
        <div className="f-wrapper">
            <img src={wave} alt="" />
            <div className="f-container">
                <span>
                    Deverloper: <a href="https://www.facebook.com/tuan6597/">Tuna65</a>
                </span>
                <span>
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faLinkedin} />
                    <FontAwesomeIcon icon={faInstagram} />
                </span>
            </div>
        </div>
    );
}

export default Footer;
