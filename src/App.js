import { BrowserRouter as Router } from "react-router-dom";
import SwitchLinks from "./SwitchLinks";

const App = () => {
  return (
    <div className="container mt-3">
      <Router>
        <SwitchLinks />
      </Router>
    </div>
  );
};

export default App;
