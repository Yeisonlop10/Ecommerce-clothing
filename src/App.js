import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';


class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  //
  unsubscribeFromAuth = null

  // Instead of calling the backend all the time or when the component mounts to find out if the user is logged in
  componentDidMount() {
    // This is given by firebase Auth. User authentication persistance
    // Open subscription
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user);
    })// 
  }
  // to avoid memory leaks we will unsubscribe when unmounting
  componentWillUnmount() {
    this.unsubscribefromAuth(); 
  }

  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>      
          <Route path='/signin' component={SignInAndSignUpPage}/>  
        </Switch>
      </div>
    );
  }
}

export default App;
