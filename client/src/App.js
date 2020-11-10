import React from "react";
import Header from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import Login from "./components/Login";
import { Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
// import ErrorPage from "./components/ErrorPage";
import NewEvent from "./components/NewEvent";
import signUpForm from "./components/SignUpForm.jsx";
import about from "./components/about";
function App() {
  return (
    <div className="App">
      <div className="main__content">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Registration" component={SignUp} />
          <Route path="/newevent" component={NewEvent} />
          <Route path="/form" component={signUpForm} />
          <Route path="/about" component={about} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
