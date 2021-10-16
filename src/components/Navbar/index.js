import React, { useState } from "react";
import logo from "../../assets/images/RoyaltyLearnersLogo.png";
import logo1 from "../../assets/icons/search-icon.png";
import Nav from "./Navbar.style";
import AcUnitIcon from "@material-ui/icons/AcUnit";
// import AcUnitIcon from '@mui/icons-material/AcUnit';

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
    link: "contacts",
    display: "contact us",
  },
  {
    link: "tutor",
    display: "teachers",
  },
  {
    link: "register",
    display: "Inquiry",
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
        {links.map((link) => {
          return (
            <Nav.Item
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
      <a href="#">
        <img
          src={logo1}
          alt="logo"
          className="logo1"
          style={{ width: "auto", height: "3.5rem" }}
        />
      </a>
    </Nav>
  );
}
