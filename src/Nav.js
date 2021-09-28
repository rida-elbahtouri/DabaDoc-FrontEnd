import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router";

const Nav = () => {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };
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

          <Button onClick={logout} variant="outline-light" className="ms-3">
            Logout
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Nav;
