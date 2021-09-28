import Nav from "./Nav";
import SwitchLinks from "./SwitchLinks";
import { checkToken } from "./functions/Api";
import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    if (location.pathname !== "/login" && location.pathname !== "/signup") {
      if (localStorage.getItem("token")) {
        checkToken(localStorage.getItem("token")).catch(() => {
          localStorage.removeItem("token");
          history.push("/login");
        });
      } else {
        history.push("/login");
      }
    }
  }, [location.pathname]);
  return (
    <div>
      <Nav />
      <div className="container mt-3">
        <SwitchLinks />
      </div>
    </div>
  );
};

export default App;
