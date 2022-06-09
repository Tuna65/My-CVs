import { createContext, useReducer } from 'react';

export const ThemeContext = createContext();

const initialState = { darkMode: false };

const reducer = (state, actions) => {
    switch (actions.type) {
        case 'toggle':
            return { darkMode: !state.darkMode };
        default:
            return state;
    }
};

export const ThemeProvider = (props) => {
    const [state, dispath] = useReducer(reducer, initialState);
    return <ThemeContext.Provider value={{ state, dispath }}>{props.children}</ThemeContext.Provider>;
};
