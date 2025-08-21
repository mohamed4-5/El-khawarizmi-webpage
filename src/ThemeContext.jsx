import { createContext,useState,useContext } from "react";

const ThemeContext=createContext();

export function ThemeProvider({children}){
    const[darkMode,setDarkMode]=useState(false)
    const toggleMode=()=>{
        setDarkMode(!darkMode)
    }

    return(
        <ThemeContext.Provider value={{darkMode,toggleMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    return useContext(ThemeContext);
}