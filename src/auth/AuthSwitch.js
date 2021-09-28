import Form from "./Form";
import { login, signUp, checkToken } from "../functions/Api";
import { useEffect } from "react";
const AuthSwitch = (props) => {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkToken(localStorage.getItem("token"))
        .then(() => {
          this.props.history.push("/");
        })
        .catch(() => {
          localStorage.removeItem("token");
        });
    }
  }, []);
  const renderHelper = (link) => {
    console.log(link);
    console.log(link === "/login");
    if (link === "/login") {
      return (
        <Form
          history={props.history}
          actionTitle="Sign in"
          formAction={login}
        />
      );
    } else {
      return (
        <Form
          history={props.history}
          actionTitle="Sign up"
          formAction={signUp}
        />
      );
    }
  };
  return <div>{renderHelper(props.location.pathname)}</div>;
};

export default AuthSwitch;
