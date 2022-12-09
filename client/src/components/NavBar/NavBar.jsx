import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import Actions from './Actions';
import { NavbarContainer, NavbarHeader, NavImage, TheList } from '../../styles/Nav';


const NavBar = () => {

  
    return (
      <NavbarContainer>
        <NavbarHeader>
        <NavImage src="/images/navbar/icon2.png" />
        </NavbarHeader>
        <TheList type="row">
              
          <Button color="inherit">Login</Button>
          <Button color="inherit" component={ Link } to="/">Home</Button>
          <Button color="inherit" component={ Link } to="/about">About</Button>
          <Button color="inherit" component={ Link } to="/shop">Shop</Button>
          <Button color="inherit" component={ Link } to="/contact">Contact Us</Button>              
        </TheList>
        <Actions />
      </NavbarContainer>
          );

  
}

export default NavBar;





