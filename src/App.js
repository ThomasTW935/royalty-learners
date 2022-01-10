import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Dashboard } from "./pages";
import UserContext from "./context/UserContext";
import useUser from "./hooks/useUser";
import Login from "./components/Login/Login";

function App() {
  const { userData, setUserData } = useUser();
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
