import React from 'react';
import { ImUser } from 'react-icons/im';
import { NavLink, Nav, NavMenu } from './navbarElements';
import '../App.css';

const Navbar = () => (
  <>
    <Nav>
      <NavMenu>
        <NavLink className="nav-logo">Bookstore CMS</NavLink>
        <NavLink to="/" activeStyle>
          Books
        </NavLink>
        <NavLink to="/Categories" activeStyle>
          Categories
        </NavLink>
      </NavMenu>
      <NavMenu>
        <NavLink>
          <div className="logo-border" />
          <div className="panel-bg">
            <ImUser />
          </div>
        </NavLink>
      </NavMenu>
    </Nav>
  </>
);

export default Navbar;
