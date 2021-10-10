import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, AboutUs, Contacts, Services, Tutor } from "./pages";
import register from "./pages/register";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/services" component={Services} />
        <Route path="/register" component={register} />
        <Route path="/tutor" component={Tutor} />
      </Switch>
    </Router>
  );
}

export default App;
