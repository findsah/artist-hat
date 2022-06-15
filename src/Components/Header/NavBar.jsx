import "./NavBar.css";

import logo from "../../Assets/title.png";

import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom"

const NavBar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('userToken');
  const signOut = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("isArtist");
    localStorage.removeItem("userId");
    navigate("/userregistration");
  }
  const location = useLocation();
  // const becomeArtist = () => {
  //   console.log(isArtist, ' become an artist clicked')
  //   if (isArtist) {
  //     console.log(isArtist, ' yeah artist is true')
  //     navigate("/userregistration");
  //     navigate('/userview')
  //   } else {
  //     navigate('/profile')
  //   }
  // }
  return (
    <header className="header">
      <Navbar expand="lg">
        <Navbar.Brand href="/" className="icon">
          <img className="logoimg" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mr-auto">
            <NavLink to="/" className="link" activeclassname="link active">
              Home
            </NavLink>
            <NavLink
              to="/getmoney"
              className="link"
              activeclassname="link active"
            >
              Categories
            </NavLink>
            <NavLink to="/blogs" className="link" activeclassname="link active">
              Blog
            </NavLink>
            <NavLink
              to="/profile4"
              className="link"
              activeclassname="link active"
            >
              Pages
            </NavLink>
          </Nav>
          <Nav className="ml-auto dir">
            <div className="navsearchdiv">
              <FiSearch />
              <input
                className="searchinput"
                type="text"
                placeholder="What are you looking for?"
              />
            </div>
            <NavLink
              to="/profile"
              className="link"
              activeclassname="link active"
            >
              <button className="navartist">Become an artist</button>
            </NavLink>
            {token && location.pathname === '/artistprofile' && <span style={{ textDecoration: "underline" }} onClick={signOut}>Logout </span>}
            <NavLink
              to={token ? "artistView" : "/userregistration"}
              className="linkBtn"
              activeclassname="linkBtn active"
            >
              {
                token && location.pathname !== '/artistprofile' &&
                <button className="navartist" style={{ background: "white" }}>
                  <span style={{ textDecoration: "underline" }}>Go to Profile </span>
                </button>}
              {!token &&
                <button className="navartist" style={{ background: "white" }}>
                  <span style={{ textDecoration: "underline" }}>Login </span> or{" "}
                  <span style={{ textDecoration: "underline" }}>Register</span>
                </button>
              }
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default NavBar;
