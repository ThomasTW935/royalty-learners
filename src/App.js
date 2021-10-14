import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, AboutUs, Contacts, Services, Tutor } from "./pages";
import Register from "./pages/register";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/services" component={Services} />
        <Route path="/tutor" component={Tutor} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
