import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Dashboard } from "./pages";

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
    </Router>
  );
}

export default App;
