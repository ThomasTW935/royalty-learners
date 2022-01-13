import logo from "../../../assets/images/RoyaltyLearnersLogo2.png";
import Nav from "../../../core-ui/Navbar.style";
import useUser from "../../../hooks/useUser"

export default function NavBar({type,setType}) {
  const {logout} = useUser()
  return (
    <Nav>
      <Nav.Logo href="#home">
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
