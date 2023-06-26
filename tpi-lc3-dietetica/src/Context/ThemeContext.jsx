import {createContext, useContext, useState } from "react";

const themeStyles = {
    dark: {
        background: '#272626',
        backgroundFooter: 'rgb(73 72 72)',
        backgroundContainer: 'rgb(80 78 78)',
        textColor: 'white',
        icon: 'faMoon',
    },

    
    light: {
        background: 'white',
        textColor: 'black',
        backgroundFooter: '#d9d7b9',
        icon: 'faSun',
    }
}

const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
    const [contextTheme , setContextTheme] = useState('light');

    const toggleTheme = () => {
        setContextTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const value = { theme: themeStyles[contextTheme] , toggleTheme };

    return(
        <ThemeContext.Provider value={ value }>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext)


export default ThemeContext;