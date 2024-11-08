import { useState, createContext } from "react";
import ThemeComponent from "./ThemeComponent";
import ThemeSelector from "./ThemeSelector";

const ThemeContext = createContext('default');

function ThemeApp() {

    const [theme, setTheme] = useState('white');

    return(
        <>
    <ThemeContext.Provider value={{theme, setTheme}}>
        <ThemeComponent />
        <ThemeSelector />
    </ThemeContext.Provider>
        </>
    )
}

export {ThemeContext};
export default ThemeApp;