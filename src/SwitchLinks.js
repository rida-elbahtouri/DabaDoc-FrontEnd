import { Switch, Route } from "react-router-dom";
import AuthSwitch from "./auth/AuthSwitch";
const SwitchLinks = () => {
  return (
    <Switch>
      <Route path="/login" exact component={AuthSwitch} />
      <Route path="/signup" exact component={AuthSwitch} />
    </Switch>
  );
};
export default SwitchLinks;
