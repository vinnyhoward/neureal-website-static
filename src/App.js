import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './app.css';
import { Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import MobileNav from './components/MobileNav';
import HomePage from './components/HomePage.js';
import LearnMore from './components/LearnMore.js';
import Footer from './components/Footer.js';
class App extends Component {
  render () {
    return (
    <div>
      <div className="main">
        <div className="squeeze">
          <NavigationBar />
          <MobileNav />
          <Switch>
          <Route component={ HomePage } exact path="/"/>
          <Route component={ LearnMore } path="/learn"/>
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
    )
  }
}

export default hot(module)(App)
