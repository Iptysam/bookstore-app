import React from 'react';
import { NavLink, Nav, NavMenu } from './navbarElements';

const Navbar = () => (
  <>
    <Nav>
      <NavMenu>
        <NavLink to="/" activestyle>
          Books
        </NavLink>
        <NavLink to="/Categories" activestyle>
          Categories
        </NavLink>
      </NavMenu>
    </Nav>
  </>
);

export default Navbar;
