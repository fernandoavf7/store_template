import React, { Component } from 'react';
import './App.css';
import AppBar from './components/appbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import StoreItemDetail from './../src/components/store_item_detail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import {list, list_favourites} from './constants/json';


class App extends Component {
  renderHome = () => <Home list={list}/>;
  renderStoreItemDetail = () => <StoreItemDetail />;
  renderFavourites = () => <Home list={list_favourites} />;
  renderProfile = () => <Profile />;

  render() {

    return (
      <Router>
        <div>
          <AppBar />
         
          <Route exact path="/" component={this.renderHome} />
          <Route exact path="/profile" component={this.renderProfile} />
          <Switch>
            <Route exact path="/favourites" component={this.renderFavourites} />
            <Route exact path="/store_item/:dni" component={this.renderStoreItemDetail} />      
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;

