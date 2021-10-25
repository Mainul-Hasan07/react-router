import React from 'react';
import "./App.css"
import Friends from './components/Friends/Friends';
import Home from "./components/Home/Home"
import About from "./components/About/About"
import NotFound from "./components/NotFound/NotFound"
import { Route,BrowserRouter as Router, Switch, Link as NavLink } from 'react-router-dom';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Culture from './components/Culture/Culture';



function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route exact path="/home">
              <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path='/about/culture'>
            <Culture></Culture>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path='/friend/:friendId'>
            <FriendDetail></FriendDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
