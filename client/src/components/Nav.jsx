import React, {  useState } from "react";
import { Button } from "react-bootstrap";
// import PersonIcon from "@material-ui/icons/Person";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { HashLink  } from 'react-router-hash-link';
import "./css/Nav.css";
import SignUp from "./SignUp";
import logo from './resources/logo.jpeg'
function Header() {
  const [login, showLogin] = useState(false);
  return (
    <div className="nav">
      <div className="nav__brand">
        <Link to="/">
          <img src ={logo} alt='lernov_logo' width="50px" height="50px" />
        </Link>
      </div>
      <div className="nav__right">
        <ul>
        <HashLink smooth to='#events'>  <li>New Events</li>
        </HashLink>
          <li>
            {" "}
            <p onClick={() => showLogin(!login)}>{!login ? <p>Registraiton</p>:  <Button>Close Form</Button>}</p>
            {login && <SignUp /> }
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
