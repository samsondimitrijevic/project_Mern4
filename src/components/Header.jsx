import React from "react";
import { List, Nav, Img } from "../styled";

function Header() {
  return (
    <header>
      <h1 data-testid="title"></h1>
      <Nav>
        <List>
          <li >
            <Img src="vite.svg" alt="Vite Icon" />
          </li>
          <li>
            <b>SAMSON</b>
          </li>
        </List>
      </Nav>
    </header>
  );
}

export default Header;
