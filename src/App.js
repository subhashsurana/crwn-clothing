import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/Shop/shop.component.jsx'

import './App.css';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import HomePage from './pages/homepage.component';

// eslint-disable-next-line
import Header from './components/Header/header.component.jsx' 

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path ='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;