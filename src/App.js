import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //this.setState({currentUser: user});
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          // We get the data related to the user 
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
          //console.log(this.state)
        });
      }
      this.setState({currentUser: userAuth})

      //console.log(user);
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
