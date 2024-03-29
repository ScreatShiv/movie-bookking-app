import React, { Component } from 'react';
import Home from '../screens/home/Home';
import Details from '../screens/details/Details';
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
class Controller extends Component {

  constructor() {
    super();
    this.baseUrl = "http://127.0.0.1:3309/api/v1/";
  }
  render() {
    return (
      <Router>
        <div className="main-container">
          <Route exact path='/' render={(props) => <Home {...props} baseUrl={this.baseUrl} />} />
          <Route path='/movie/:id' render={(props) => <Details {...props} baseUrl={this.baseUrl} />} />
        </div>
      </Router>

    )
  }
}

export default Controller;
