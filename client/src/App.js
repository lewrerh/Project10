import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import { createCipher } from 'crypto';
import axios from 'axios';
import withContext from './Context';
import PrivateRoute from './PrivateRoute';
import Authenticated from './components/Authenticated';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';
import UserSignOut from './components/UserSignOut';


const UserSignInWithContext = withContext(UserSignIn);
const UserSignUpWithContext = withContext(UserSignUp);
const HeaderWithContext = withContext(Header);
const AuthWithContext = withContext(Authenticated);
const UserSignOutWithContext = withContext(UserSignOut);
const CreateCourseWithContext = withContext(CreateCourse);

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
                 <Route exact path="/" component={Courses} />
                 <PrivateRoute path="/authenticated" component={AuthWithContext} />
                 <Route exact path="/courses/:id" component={CourseDetail} />
                 <Route path="/signin" component={UserSignInWithContext} />
                 <Route path="/signup" component={UserSignUpWithContext} />
                 <Route path="/signout" component={UserSignOutWithContext} />
                 <Route path="/createCourse" component={CreateCourseWithContext} />
               </Switch>
            </div>
          </Router>  
        );
    
    }
  }