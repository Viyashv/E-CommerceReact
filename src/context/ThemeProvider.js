import { createContext, useState } from "react";

export let themeContext = createContext()

export function ThemeChanger(props) {
    const [theme, setTheme] = useState('light')
    let ThemeStyle = {}
    if (theme === 'light') {
        ThemeStyle = {backgroundColor:'light' , color:"black"}
    }
    else{
        ThemeStyle = {backgroundColor:'dark', color:"white"}
    }
    return(
    <themeContext.Provider values={{theme , setTheme , ThemeStyle}}>
        {props.children}
    </themeContext.Provider>)
} 