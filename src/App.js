import React from "react";
import Messages from "./Messages";
import NavBar from "./NavBar";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import About from "./About";
import { Route, Switch } from "react-router-dom";

/* add the NavBar component to our App component */
function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/messages">
          <Messages />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
