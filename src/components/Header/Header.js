import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import { Link, NavLink } from 'react-router-dom'

import styles from '../styles/Navbar.module.css'

const authenticatedOptions = (
  <>
   <img
      src="https://i.imgur.com/G4m6Op1.jpeg"
      height="35"
      width="35"
      className="d-inline-block align-top"
      alt="profile icon"
    />
   <NavDropdown>
    <NavLink to='/poem-create' className='nav-link'>Create Poem</NavLink>
    <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
    <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
   </NavDropdown>
  </>
)

const unauthenticatedOptions = (
  <>
    <NavLink to='/sign-up' className='nav-link' style={{ color: '#FFF' }}>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link' style={{ color: '#FFF' }}>Sign In</NavLink>
  </>
)

// const alwaysOptions = (
//   <>
//     <NavLink to='/' className='nav-link'>Home</NavLink>
//   </>
// )

const Header = ({ user }) => (
  <Navbar className={ styles.navbar } expand='md'>
    <Container>
      <Navbar.Brand>
        <Link to='/poems' style={{ color: '#FFF', textDecoration: 'none' }}>Poem of the day</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'className={styles.menu}>
        <Nav className='ms-auto'>
          {user ? authenticatedOptions : unauthenticatedOptions}
          {user && (
            <span className='navbar-text me-2' style={{ color:'#fff' }}> {user.email}</span>
          )}
          {/* {alwaysOptions} */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header
