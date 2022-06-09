import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'react-scroll/modules/components/Link';

import './TapToTop.css';

function TapToTop() {
    document.onscroll = function () {
        if (window.scrollY > 800) {
            document.querySelector('.t-button').style.display = 'block';
        } else document.querySelector('.t-button').style.display = 'none';
    };
    return (
        <Link spy={true} to="Header" smooth={true} activeClass="activeClass">
            <button className="t-button">
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        </Link>
    );
}

export default TapToTop;
