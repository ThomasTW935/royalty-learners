import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, AboutUs, Contacts, Services, Tutor } from "./pages";
import Register from "./pages/register";
import Form2 from "./pages/forms";

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
        <Route path="/form2" component={Form2} />
      </Switch>
    </Router>
  );
}

export default App;
