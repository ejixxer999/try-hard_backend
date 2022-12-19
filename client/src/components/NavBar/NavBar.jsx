import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import Actions from './Actions';
import { NavbarContainer, NavbarHeader, NavImage, TheList } from '../../styles/Nav';
import { useUIContext } from '../../context/context';


const NavBar = () => {
    const {currentUser, cart, userToken} = useUIContext()
    return (
      <NavbarContainer>
        <NavbarHeader>
        <NavImage src="/images/navbar/icon2.png" />
        </NavbarHeader>
        <TheList type="row">
              
          {!currentUser && <Button color="inherit" component={ Link } to="/login">Login</Button>}
          {!currentUser && <Button color="inherit" component={ Link } to="/register">Register</Button>}
          {currentUser && <Button color="inherit" component={ Link } to="/logout">Logout</Button>}
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





