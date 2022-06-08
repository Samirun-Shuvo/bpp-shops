import React from "react";
import logo from "../../../src/images/logo/logo.png";
import islamic from "../../../src/images/menu-icon/islamic.png";
import grocery from "../../../src/images/menu-icon/grocery.png";
import fashion from "../../../src/images/menu-icon/fashion.png";
import electronics from "../../../src/images/menu-icon/electronics.png";
import babycare from "../../../src/images/menu-icon/babycare.png";
import cosmetics from "../../../src/images/menu-icon/cosmetics.png";
import furniture from "../../../src/images/menu-icon/furniture.png";
import shoe from "../../../src/images/menu-icon/shoe.png";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar
        className="text-white fw-bold px-5 headerContaint"
        collapseOnSelect
        expand="lg"
        bg="warning"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand href="#home">
          <NavDropdown id="basic-nav-dropdown menuIconImg">
            <NavDropdown.Item as={Link} to="/">
              <i className="fas fa-home text-warning fs-5 d-block text-center"></i>
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/islamicproduct">
              <img style={{height:"30px", paddingRight:"8px"}} src={islamic} alt="" srcset="" />
              <span className="text-warning">Islamic Products</span>
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/grocery">
              <img style={{height:"30px", paddingRight:"8px"}} src={grocery} alt="" srcset="" />
              <span className="text-warning">Grocery</span>
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/fashion">
              <img style={{height:"30px", paddingRight:"8px"}} src={fashion} alt="" srcset="" />
              <span className="text-warning">Fashion</span>
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/electronics">
              <img style={{height:"30px", paddingRight:"8px"}} src={electronics} alt="" srcset="" />
              <span className="text-warning">Electronics</span>
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/babycare">
              <img style={{height:"30px", paddingRight:"8px"}} src={babycare} alt="" srcset="" />
              <span className="text-warning">Baby Care</span>
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/cosmetic">
              <img style={{height:"30px", paddingRight:"8px"}} src={cosmetics} alt="" srcset="" />
              <span className="text-warning">Cosmetic</span>
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/furniture">
              <img style={{height:"30px", paddingRight:"8px"}} src={furniture} alt="" srcset="" />
              <span className="text-warning">Furniture</span>
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/shoe">
              <img style={{height:"30px", paddingRight:"8px"}} src={shoe} alt="" srcset="" />
              <span className="text-warning">Shoe</span>
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="/">
          <img style={{ height: "40px" }} src={logo} alt="" srcset="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Form className="d-flex mx-auto w-50">
            <FormControl
              type="search"
              placeholder="Search By Product, Catagorie, Brand Name !!!"
              className="me-2"
              aria-label="Search"
            />
            <Button className="text-white" variant="outline-success">
              <i className="bi bi-search"></i>
            </Button>
          </Form>
          <Nav>
            <Nav.Link className="text-white fw-bold " href="#login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
