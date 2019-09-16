import React, { Component } from 'react';
import axios from 'axios';

export default class CourseDetail extends Component {

    constructor() {
        super();
        this.state = {
            data: null
        };
    }

    componentDidMount() {

        const { id } = this.props.match.params;

        axios.get(`http://localhost:5000/api/courses/${id}`)
            .then(response => {
                this.setState({
                    data: response.data
                });

            })
            .catch(error => {
                console.log('Error fetching data', error);
            });
    }

    render() {
        let course = {};
        let user = {};

        if (this.state.data) {
            course = this.state.data;
            user = this.state.data.User;
        }

        return (
          <div>
            <div class="actions--bar">
                <div class="bounds">
                    <div class="grid-100"><span><a class="button" href="update-course.html">Update Course</a><a class="button" href="#">Delete Course</a></span><a
                        class="button button-secondary" href="index.html">Return to List</a></div>
                </div>
            </div>
                <div className="bounds course--detail">
                    <div className="grid-66">
                        <div className="course--header">
                            <h4 className="course--label">Course</h4>
                            <h3 className="course--title">{course.title}</h3>
                            <p>By {user.firstName} {user.lastName}</p>
                        </div>
                        <div className="course--description">
                            <p>{course.description}</p>
                        </div>
                    </div>
                    <div className="grid-25 grid-right">
                        <div className="course--stats">
                            <ul className="course--stats--list">
                                <li class="course--stats--list--item">
                                    <h4>Estimated Time</h4>
                                    <h3>{course.estimatedTime}</h3>
                                </li>
                                <li class="course--stats--list--item">
                                    <h4>Materials Needed</h4>
                                    <ul>
                                        <li>{course.materialsNeeded}</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> `;
          </div>
        )
    };
}

