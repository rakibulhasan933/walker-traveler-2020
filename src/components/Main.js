import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '../utils/useAuth';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import SearchResult from './SearchResult/SearchResult';
import Login from './Login/Login';
import NotFound from './NotFound/NotFound';
import SetDestination from './SetDestination/SetDestination';

const Main = () => {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/destinations/:place" component={SetDestination} />
          <Route exact path="/search-result/:place" component={SearchResult} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Main;
