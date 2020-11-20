import React, { Component } from "react";
import {
  MDBContainer,
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse
} from "mdbreact";
import './header.css'
class NavbarPage extends Component {


  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  state = {
    links: [
      {
        id: 1,
        name: "Home",
        href: '#Home',
        className: "side_nav_item"
      },
      {
        id: 2,
        name: "About",
        href: "#About",
        className: "side_nav_item"
      },

      {
        id: 3,
        name: "Skills",
        href: "#Skills",
        className: "side_nav_item"
      },

      {
        id: 4,
        name: "Timline",
        href: "#Timline",
        className: "side_nav_item"
      },

      {
        id: 5,
        name: "Portfolio",
        href: "#Portfolio",
        className: "side_nav_item"
      },

      {
        id: 6,
        name: "Contact",
        href: "#Contact",
        className: "side_nav_item"
      },
    ],
    activeLink: null,
    isOpen: false
  };

  handleClick = id => {
    this.setState({ activeLink: id });
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    const { links, activeLink } = this.state;
    return (
      <MDBNavbar className='nav' expand='md' light>
        <MDBContainer>
          <MDBNavbarBrand>
            <h1 className='title'><span className='titleColor'>K</span>enan</h1>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" className='titleColor' isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              {links.map(link => {
                return (
                  <MDBNavItem key={link.id}
                    onClick={() => this.handleClick(link.id)}
                    className={
                      link.className +
                      (link.id === activeLink ? " active_item" : "")
                    }
                  >
                    <a className={link.id === activeLink & "side_nav_item_active" } href={link.href}> {link.name} </a>
                  </MDBNavItem>
                );
              })}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

    );
  }
}

export default NavbarPage;