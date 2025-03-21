import { createContext, useState } from "react";

export let themeContext = createContext()

export function ThemeChanger(props) {
    const [theme, setTheme] = useState("light")
    // console.log(theme);
    
    let ThemeStyle = {}
    if (theme === 'light') {
        ThemeStyle = {backgroundColor:'white' , color:"black"}
    }
    else{
        ThemeStyle = {backgroundColor:'black', color:"white"}
    }
    return(
    <themeContext.Provider value={{theme , setTheme , ThemeStyle}}>
        {props.children}
    </themeContext.Provider>)
} 