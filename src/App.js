import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './app.css';
import { Router, Route, Switch, Link } from 'react-static';
import SocialBar from './components/SocialBar';
import NavigationBar from './components/NavigationBar';
import MobileNav from './components/MobileNav';
import HomePage from './components/HomePage.js';
import Footer from './components/Footer.js';
import RoadMap from './components/RoadMap.js';
import Team from './components/Team.js';
import Blog from './components/Blog.js';
import BlogPosts from './components/posts/BlogPosts';
class App extends Component {
  render () {
    return (
<Router>
  <div className='overlay-body'>
    <SocialBar />
    <div className="main">
      <div className="squeeze">
        <NavigationBar />
        <MobileNav />
        <Switch>
          <Route component={ HomePage } exact path="/" />
          <Route component={ RoadMap } path="/roadmap" />
          <Route component={ Blog } path="/blog" />
          <Route component={ Team } path="/team" />
          <Route component={ BlogPosts } path="/blog-1" />
        </Switch>
      </div>
    </div>
    <Footer />
  </div>
</Router>
    )
  }
}

export default hot(module)(App)
