import React from 'react';
import { NavLink, Nav, NavMenu } from './navbarElements';

const Navbar = () => (
  <>
    <Nav>
      <NavMenu>
        <NavLink to="./" activeStyle>
          Books
        </NavLink>
        <NavLink to="src/components/Categories.js" activeStyle>
          Categories
        </NavLink>
      </NavMenu>
    </Nav>
  </>
);

export default Navbar;
