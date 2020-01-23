import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './login.css';
import './login.theme.css';
import './login.carousel.css';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Header from './Components/header';
import Login from './Components/login';
import Footer from './Components/footer';
import Signin from './Components/signin';
import Posts from './Components/Posts';
function App() {
  return (
    <div className="B-da">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/">
              <Login />
          </Route>
          <Route exact path="/posts">
              <Posts />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
