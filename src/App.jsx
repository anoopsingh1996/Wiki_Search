import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Search1 from  './components/Result'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/result" component={Search1} />
        </div>
      </Router>
    );
  }
}

export default App;
