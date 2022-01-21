import { createGlobalStyle, withTheme } from "styled-components";
import iDark from "../icons/dark.png"


export const lightTheme = {
    body: '#FFF',
    text: '#363537',
    toggleBorder: '#FFF',
    background: '#363537',
    color: 'black',

};

export const darkTheme = {
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    background: '#999',
    color: 'white',

};

 


export const Globalstyles = createGlobalStyle`
    body{
        background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    }
    button{

  cursor: pointer;
  background: white;
  font-size: 14px;
  border-radius: 12px;
  border-color: none;
  color: black;
 
   
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
   
        
        
    }






`;

