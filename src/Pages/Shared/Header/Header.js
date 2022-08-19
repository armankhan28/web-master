import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
      }
  return (
    <Navbar  collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className='logo' href="/home"><span>W</span>eb-Master</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="home#services">Services</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>

            {
               user ?
               <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
           : 
                
                <Nav.Link href="/login">Login</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
