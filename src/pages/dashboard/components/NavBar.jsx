import logo from "../../../assets/images/LogoIllustration1.png";
import Nav from "../../../core-ui/Navbar.style";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Nav>
      <Nav.Logo href="#home">
        <img src={logo} alt="logo" />
      </Nav.Logo>
      <Nav.List>
        <Nav.Item>
          <Link href="">Users</Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="">Students</Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="">Test</Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="">Test</Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="">Logout</Link>
        </Nav.Item>
      </Nav.List>
    </Nav>
  );
}
