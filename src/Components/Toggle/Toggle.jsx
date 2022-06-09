import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { ThemeContext } from '../../Context';

import './Toggle.css';

function Toggle() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleOnclick = () => {
        theme.dispath({ type: 'toggle' });
    };

    return (
        <div className="t-wrapper" onClick={handleOnclick}>
            <FontAwesomeIcon icon={faSun} />
            <FontAwesomeIcon icon={faMoon} />
            <span className="moon" style={darkMode ? { left: '-4px' } : { right: '-4px' }}></span>
        </div>
    );
}
export default Toggle;
