import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import { createCipher } from 'crypto';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Header from './components/Header';
import Courses from './components/Courses';
import CreateCourse from './components/CreateCourse';
import CourseDetail from './components/CourseDetail';
import UpdateCourse from './components/UpdateCourse';
import withContext from './Context';
import PrivateRoute from './PrivateRoute';
import UserSignIn from './components/UserSignIn';
import Authenticated from './components/Authenticated';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';
import Forbidden from './Forbidden';
import NotFound from './components/NotFound';
import Error from './error';

const HeaderWithContext = withContext(Header);
const UserSignInWithContext = withContext(UserSignIn);
const AuthWithContext = withContext(Authenticated);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignOutWithContext = withContext(UserSignOut);
const CreateCourseWithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);
const CourseDetailWithContext = withContext(CourseDetail);


export default class App extends Component {

    constructor() {
        super();
    }

    componentDidMount() {  //Called after component to get data

    }

    render() {
        
        return (            //Routes set up for each task, private route for authentication
            <Router>  
                <div>
                    <HeaderWithContext />

                    <Switch>
                        <Route exact path="/" component={Courses} />
                        <PrivateRoute path="/authenticated" component={AuthWithContext} />
                        <PrivateRoute path="/courses/create" component={CreateCourseWithContext} />
                        <Route exact path="/courses/:id" component={CourseDetailWithContext} />
                        <Route path="/signin" component={UserSignInWithContext} />
                        <Route path="/signup" component={UserSignUpWithContext} />
                        <Route path="/signout" component={UserSignOutWithContext} />
                        <PrivateRoute path="/courses/:id/update" component={UpdateCourseWithContext} />
                        <Route path="/forbidden" component={Forbidden} />
                        <Route path="/error" component={Error} /> 
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}