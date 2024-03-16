import React from 'react'
import { List, Nav, Img } from '../styled';

function Header() {
  return (
    <header>
        <Nav>
            <List>
               <li><Img src="vite.svg" alt="/"/></li>
               <li><b>SAMSON</b></li>
            </List>
        </Nav>
    </header>
  )
}

export default Header;