import { Switch, Route } from "react-router-dom";
import AuthSwitch from "./auth/AuthSwitch";
import Question from "./Questios/index";
import Answers from "./Answers";
import CreateQuestion from "./Questios/Create";
const SwitchLinks = () => {
  return (
    <Switch>
      <Route path="/" exact component={Question} />
      <Route path="/question/add" exact component={CreateQuestion} />
      <Route path="/question/:id/answers" exact component={Answers} />
      <Route path="/login" exact component={AuthSwitch} />
      <Route path="/signup" exact component={AuthSwitch} />
    </Switch>
  );
};
export default SwitchLinks;
