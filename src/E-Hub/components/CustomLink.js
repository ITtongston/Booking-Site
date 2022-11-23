import React from 'react'
import '../Assets/css/Navbar.css';
import { Link } from 'react-router-dom';

const CustomLink = ({to, children, ...props}) => {
    const path = window.location.pathname;
  return (
    <li className={path === to ? 'nav-item active2' : 'nav-item'} >
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}

export default CustomLink
