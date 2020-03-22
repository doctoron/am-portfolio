import React from 'react';
import { Link } from 'react-router-dom';
import {
  Jumbotron,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import '../index.css'
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io"

class MyNav extends React.Component {
  constructor (props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render () {
    return (
      <Jumbotron>
        <div className="nav-header">
          <Navbar color="light" light expand="md">
            <NavbarBrand tag={Link} to="/" onClick={this.toggle}>Portfolio Home</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav tabs className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/about" onClick={this.toggle} >About</NavLink>
                </NavItem>
                <NavItem >
                  <NavLink tag={Link} to="/my-resume" onClick={this.toggle}> Resume</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/contact" onClick={this.toggle}>Contact</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://www.linkedin.com/in/ronald-k-antonio/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin style={{ fontSize: 40, color: "#3077B0" }} /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/doctoron" target="_blank" rel="noopener noreferrer"><IoLogoGithub style={{ fontSize: 40, color: "#24292D" }} /></NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </Jumbotron>
    );
  }
}
export default MyNav; 