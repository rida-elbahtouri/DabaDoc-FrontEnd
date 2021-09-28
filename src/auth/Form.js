import React, { Component } from "react";
import { Alert, Form, Button } from "react-bootstrap";

class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      passwordError: "",
      emailError: "",
      credentialError: "",
    };
  }
  myAction = (user) => {
    this.props
      .formAction(user)
      .then((res) => {
        this.setState({ credentialError: "" });
        localStorage.setItem("token", res.data);
        this.props.history.push("/");
      })
      .catch((e) => {
        if (e.response.data.error) {
          this.setState({ credentialError: e.response.data.error });
        } else {
          this.setState({ credentialError: "Email or Password is invalid!" });
        }
      });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    let emailError = "";
    let passwordError = "";
    this.setState({ credentialError: "" });

    if (!this.state.email) {
      emailError = "please write your email";
    }

    if (!this.state.password) {
      passwordError = "password is requiered";
    }

    if (emailError || passwordError) {
      this.setState({
        emailError,
        passwordError,
      });

      return false;
    }

    this.setState({
      emailError: "",
      passwordError: "",
    });

    return true;
  };

  displayError = (name) => {
    let _state = name + "Error";

    if (this.state[_state]) {
      return <Alert variant="danger">{this.state[_state]}</Alert>;
    }
  };

  handleForm = (e) => {
    e.preventDefault();

    if (this.validate()) {
      this.myAction(this.state);
    }
  };

  render() {
    return (
      <div className="login-page">
        <Form
          className="bg-light rounded p-4 pb-5 text-center mx-auto"
          onSubmit={this.handleForm}
        >
          <h1 className="fw-light pb-5">{this.props.actionTitle}</h1>
          {this.displayError("credential")}
          {this.displayError("email")}
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              name="email"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          {this.displayError("password")}
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              name="password"
              type="password"
              placeholder="Enter password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {this.props.actionTitle}
          </Button>
        </Form>
      </div>
    );
  }
}

export default FormComponent;
