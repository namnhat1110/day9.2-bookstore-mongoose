import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import logo from "../images/logo.svg";
// import githubIco from "../images/github_icon.png";
import { NavLink } from "react-router-dom";





const PublicNavbar = () => {
  const authState = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const onSignIn = (e) => {
    e.preventDefault();
    dispatch({ type: "AUTH.SIGN_IN", payload: { email } });
  };

  const onSignOut = (e) => {
    e.preventDefault();
    dispatch({ type: "AUTH.SIGN_OUT" });
  };
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <img src={logo} alt="CoderSchool" width="200px" />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/reading">
          Reading List
        </Nav.Link>
      </Nav>
      {authState.email ? (
        <Form inline onSubmit={onSignOut}>
          {authState.email}
          < Button
            variant="outline-danger"
            onClick={onSignOut}
          >
            Sign Out
                            </Button>
        </Form>
      ) : (
        <Form inline onSubmit={onSignIn}>
          <FormControl
            type="text"
            placeholder="Email"
            className="mr-sm-2"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Button
            type="submit"
            variant="outline-success"
            onClick={onSignIn}
          >
            Sign In
                            </Button>

        </Form>
      )}
    </Navbar>
  );
};

export default PublicNavbar;
