import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>DabaDoc-QA</Navbar.Brand>
        </Link>
        <div>
          <Link className="text-light" to="/question/add">
            Add Question
          </Link>

          <Link className="text-light ms-3 " to="/profile">
            Profile
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default Nav;
