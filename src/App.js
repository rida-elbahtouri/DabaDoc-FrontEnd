import { BrowserRouter as Router } from "react-router-dom";
import SwitchLinks from "./SwitchLinks";

const App = () => {
  return (
    <div>
      <Router>
        <SwitchLinks />
      </Router>
    </div>
  );
};

export default App;
