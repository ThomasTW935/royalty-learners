import React, { useState } from "react";
import logo from "../../assets/images/LogoIllustration1.png";
import logo1 from "../../assets/icons/search-icon.png";
import Nav from "./Navbar.style";

const links = [
  {
    link: "services",
    display: "services",
  },
  {
    link: "aboutus",
    display: "about us",
  },
  {
    link: "tutor",
    display: "teachers",
  },
  {
    link: "contacts",
    display: "contact us",
  },

  {
    link: "inquiry",
    display: "inquiry",
  },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  return (
    <Nav>
      <Nav.Logo href="#home">
        <img src={logo} alt="logo" />
      </Nav.Logo>
      <Nav.List>
        {links.map((link,index) => {
          return (
            <Nav.Item 
              key={index}
              active={active === link.link ? 1 : 0}
              onClick={() => {
                setActive(link.link);
              }}
            >
              <a href={`#${link.link}`}>{link.display}</a>
            </Nav.Item>
          );
        })}
      </Nav.List>
    </Nav>
  );
}
