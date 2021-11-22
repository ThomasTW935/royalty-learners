import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Admin } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
