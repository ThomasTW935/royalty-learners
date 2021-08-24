import React, { useState } from 'react'
import logo from '../../assets/images/Untitled.png'
import { Link } from 'react-router-dom'
import Nav from './Navbar.style'

const links = [
  {
    link: 'contacts',
    display: 'contacts',
  },
  {
    link: 'aboutus',
    display: 'about us',
  },
  {
    link: 'services',
    display: 'services',
  }
  
]

export default function Navbar() {
  const [active, setActive] = useState('')
  return (
    <Nav>
      <Link to='/'>
        <img
          src={logo}
          alt='logo'
          className='logo1'
          style={{ width: '28rem', height: '6rem' }}
        />
      </Link>
      <Nav.List>
        {links.map((link) => {
          return (
            <Nav.Item active={active === link.link  ? 1 : 0} onClick={ ()=> { setActive(link.link) } }>
              <Link to={link.link}>{link.display}</Link>
            </Nav.Item>
          )
        })}
      </Nav.List>
    </Nav>
  )
}
