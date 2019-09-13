import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import { createCipher } from 'crypto';
import axios from 'axios';
import Public from './components/Public';
import NotFound from './components/NotFound';
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';
import UserSignOut from './components/UserSignOut';
import Authenticated from './components/Authenticated';


import withContext from './Context';
import PrivateRoute from './PrivateRoute';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


import Header from './components/Header';

import Courses from './components/Courses';

//import withContext from './Context';

const HeaderWithContext = withContext(Header);
//import withContext from './Context';
//import PrivateRoute from './PrivateRoute';
//const HeaderWithContext = withContext(Header);
const AuthWithContext = withContext(Authenticated);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);

export default class App extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        
    }

    render() {

        return (
          <Router>
            <div>
               <HeaderWithContext />

               <Switch>
                 
                  <Route exact path="/" component={Public} />
                  <Route path="/courses" component={Courses} />
                  <PrivateRoute path="/authenticated" component={AuthWithContext} />
                  <Route path="/signin" component={UserSignInWithContext} />
                  <Route path="/signup" component={UserSignUpWithContext} />
                  <Route path="/signout" component={UserSignOutWithContext} />
                  <Route component={NotFound} />
               </Switch>
            </div>
          </Router>  
        );
    }
}


// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch
// } from 'react-router-dom';

// import Header from './components/Header';
// import Public from './components/Public';
// import NotFound from './components/NotFound';
// import UserSignUp from './components/UserSignUp';
// import UserSignIn from './components/UserSignIn';
// import UserSignOut from './components/UserSignOut';
// import Authenticated from './components/Authenticated';

// import withContext from './Context';
// import PrivateRoute from './PrivateRoute';
// Rea
// const HeaderWithContext = withContext(Header);
// const AuthWithContext = withContext(Authenticated);
// const UserSignUpWithContext = withContext(UserSignUp);
// const UserSignInWithContext = withContext(UserSignIn);
// const UserSignOutWithContext = withContext(UserSignOut);

// export default () => (
//   <Router>
//     <div>
//       <HeaderWithContext />

//       <Switch>
//         <Route exact path="/" component={Public} />
//         <PrivateRoute path="/authenticated" component={AuthWithContext} />
//         <Route path="/signin" component={UserSignInWithContext} />
//         <Route path="/signup" component={UserSignUpWithContext} />
//         <Route path="/signout" component={UserSignOutWithContext} />
//         <Route component={NotFound} />
//       </Switch>
//     </div>
//   </Router>
// );

