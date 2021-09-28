import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Nav";

import SwitchLinks from "./SwitchLinks";

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <div className="container mt-3">
          <SwitchLinks />
        </div>
      </Router>
    </div>
  );
};

export default App;
