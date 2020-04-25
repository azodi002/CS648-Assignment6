  
import React from 'react';

import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import { Nav, Navbar, NavItem, NavDropdown, Grid} from 'react-bootstrap';

import Contents from './Contents.jsx';

function NavBar() {
  return (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>Product Tracker</Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer exact to="/">
        <NavItem>Home</NavItem>
      </LinkContainer>
      <LinkContainer exact to="/products">
        <NavItem>Product List</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
  );
}

export default function Page() {
  return (
    <div>
      <NavBar />
      <Grid fluid>
        <Contents />
      </Grid>
    </div>
  );
}