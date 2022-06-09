import './Header.css';
import { Link } from 'react-scroll';
import Toggle from '../Toggle/Toggle';
function Header() {
    return (
        <div className="h-wrapper " id="Header">
            <div className="h-left">
                <h2>Tuna</h2>
                <Toggle />
            </div>
            <div className="h-right">
                <div className="h-navbar">
                    <ul>
                        <Link spy={true} to="Header" smooth={true} activeClass="activeClass">
                            <li>Info</li>
                        </Link>
                        <Link spy={true} to="Skill" smooth={true}>
                            <li>Skill</li>
                        </Link>
                        <Link spy={true} to="Project" smooth={true}>
                            <li>Project</li>
                        </Link>
                        <Link spy={true} to="Contact" smooth={true}>
                            <li>Contact</li>
                        </Link>
                        <Link spy={true} to="Header" smooth={true}>
                            <li>About</li>
                        </Link>
                    </ul>
                </div>
                <Link spy={true} to="Contact" smooth={true}>
                    <button className="button h-button">Contact</button>
                </Link>
            </div>
        </div>
    );
}

export default Header;
