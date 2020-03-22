import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

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
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="https://docs.google.com/document/d/e/2PACX-1vSCfoPQdiUoUfaKsqmFC9n8QaUCQJ6xDuUGqTigG7XzZASUaWSIQjWzUUfx6zuKW33opEU1Zi7sLyYi/pub" target="_blank" rel="noopener noreferrer">About Ronald K. Antonio</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/ronald-k-antonio/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin style={{ fontSize: 50, color: "#3077B0" }} /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/doctoron" target="_blank" rel="noopener noreferrer"><IoLogoGithub style={{ fontSize: 50, color: "#24292D" }} /></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default MyNav;