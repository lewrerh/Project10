import React from 'react';
//import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { createCipher } from 'crypto';

// app.get('/', async (req, res, ) => {
//   Course.findAll().then(courses => {
//       if (courses) {
//           res.status(200).json(courses);
//       } else {
//           res.status(404).json({message: "Sorry, try again."});
//       }
//   });
// });
// class App extends Component {
//   render
// }
//  {
  function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

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

