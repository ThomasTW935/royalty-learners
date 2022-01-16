import logo from "../../../assets/images/RoyaltyLearnersLogo2.png";
import Nav from "../../../core-ui/Navbar.style";
import useToken from "../../../hooks/useToken"

export default function NavBar({type,setType}) {
  const {logout} = useToken()
  return (
    <Nav>
      <Nav.Logo href="/">
        <img src={logo} alt="logo" />
      </Nav.Logo>
      <Nav.List>
        <Nav.Item onClick={()=>{ setType("teachers") }}>
          <button>Teachers</button>
        </Nav.Item>
        <Nav.Item onClick={()=>{ setType("students") }}>
          <button>Students</button>
        </Nav.Item>
        
        <Nav.Item>
          <button onClick={logout}>Logout</button>
        </Nav.Item>
      </Nav.List>
    </Nav>
  );
}
