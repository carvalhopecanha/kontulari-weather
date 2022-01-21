import React from 'react';
import logo from '../icons/logo2.png'
import styled from 'styled-components';
import DarkMode from './darktheme';

 const Header = () => {
  return (
      <div>         
      <Navcss className='NavBarItens'>
      <img src={logo} alt="Logo Tempo"    height= "auto" />
      <DarkMode/>
      </Navcss>      
  </div>);
}

export default Header;
const Navcss = styled.div`
margin-top: 48px;
text-align: center;
img{
  width: 350px;
  height: auto;
}



`