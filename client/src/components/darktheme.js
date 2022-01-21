import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, Globalstyles } from '../style/themes'
 


 

function DarkMode() {
const [theme, setTheme] = useState("light");

const themeToggler = () => {
    theme ==="light" ? setTheme("dark") : setTheme ("light");

};


  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <Globalstyles/>
    <button   type="button" onClick={() => themeToggler()}>Dark  </button>

    </ThemeProvider>);
}


export default DarkMode;

 
