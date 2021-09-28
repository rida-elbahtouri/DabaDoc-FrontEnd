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

        <Link className="text-light" to="/question/add">
          Add Question
        </Link>
      </Container>
    </Navbar>
  );
};

export default Nav;
