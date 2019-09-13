import React, { Component }  from 'react';
import axios from 'axios';


export default class Courses extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount() {

        axios.get('http://localhost:5000/api/courses')
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
        let dataHtml = this.state.data.map(dataItem => 
            <div className="grid-33"><a class="course--module course--link" href="course-detail.html">
            <h4 className="course--label">Course</h4>
            <h3 className="course--title">{dataItem.title}</h3>
          </a></div>
        );

        return (
            <div className="bounds">
            {dataHtml}
            <div class="grid-33"><a class="course--module course--link" href="course-detail.html">
            <h4 class="course--label">Course</h4>
            <h3 class="course--title">Build a Basic Bookcase</h3>
            </a></div>
            <div class="grid-33"><a class="course--module course--link" href="course-detail.html">
            <h4 class="course--label">Course</h4>
            <h3 class="course--title">Learn How to Program</h3>
            </a></div>
            <div class="grid-33"><a class="course--module course--link" href="course-detail.html">
            <h4 class="course--label">Course</h4>
            <h3 class="course--title">Learn How to Test Programs</h3>
            </a></div>
            <div class="grid-33"><a class="course--module course--add--module" href="create-course.html">
            <h3 class="course--add--title"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 13 13" class="add">
                <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
              </svg>New Course</h3>
          </a></div>
        </div>
        );
    }
}
// import React, { Component }  from 'react';
// import ReactDOM from 'react-dom';



// export default class App extends Component {

//     constructor() {
//         super();
//         this.state = {
//             data: []
//         };
//     }

//     componentDidMount() {

//         axios.get('http://localhost:5000/api/courses')
//             .then(response => {
//                 this.setState({
//                     data: response.data
//                 });

//             })
//             .catch(error => {
//                 console.log('Error fetching data', error);
//             });
//     }

//     render() {
//         return (

//         <div className="actions--bar">
//           <div className="bounds">
//             <div className="grid-100"><span><a className="button" href="update-course.html">Update Course</a><a className="button" href="#">Delete Course</a></span><a
//                 className="button button-secondary" href="index.html">Return to List</a></div>
//           </div>
//         </div>
//         <div className="bounds course--detail">
//           <div className="grid-66">
//             <div className="course--header">
//               <h4 className="course--label">Course</h4>
//               <h3 className="course--title">Build a Basic Bookcase</h3>
//               <p>By Joe Smith</p>
//             </div>
//             <div className="course--description">
//               <p>High-end furniture projects are great to dream about. But unless you have a well-equipped shop and some serious woodworking experience to draw on, it can be difficult to turn the dream into a reality.</p>
//               <p>Not every piece of furniture needs to be a museum showpiece, though. Often a simple design does the job just as well and the experience gained in completing it goes a long way toward making the next project even better.</p>
//               <p>Our pine bookcase, for example, features simple construction and it's designed to be built with basic woodworking tools. Yet, the finished project is a worthy and useful addition to any room of the house. While it's meant to rest on the floor, you can convert the bookcase to a wall-mounted storage unit by leaving off the baseboard. You can secure the cabinet to the wall by screwing through the cabinet cleats into the wall studs.</p>
//               <p>We made the case out of materials available at most building-supply dealers and lumberyards, including 1/2 x 3/4-in. parting strip, 1 x 2, 1 x 4 and 1 x 10 common pine and 1/4-in.-thick lauan plywood. Assembly is quick and easy with glue and nails, and when you're done with construction you have the option of a painted or clear finish.</p>
//               <p>As for basic tools, you'll need a portable circular saw, hammer, block plane, combination square, tape measure, metal rule, two clamps, nail set and putty knife. Other supplies include glue, nails, sandpaper, wood filler and varnish or paint and shellac.</p>
//               <p>The specifications that follow will produce a bookcase with overall dimensions of 10 3/4 in. deep x 34 in. wide x 48 in. tall. While the depth of the case is directly tied to the 1 x 10 stock, you can vary the height, width and shelf spacing to suit your needs. Keep in mind, though, that extending the width of the cabinet may require the addition of central shelf supports.</p>
//             </div>
//           </div>
//           <div className="grid-25 grid-right">
//             <div className="course--stats">
//               <ul className="course--stats--list">
//                 <li className="course--stats--list--item">
//                   <h4>Estimated Time</h4>
//                   <h3>14 hours</h3>
//                 </li>
//                 <li className="course--stats--list--item">
//                   <h4>Materials Needed</h4>
//                   <ul>
//                     <li>1/2 x 3/4 inch parting strip</li>
//                     <li>1 x 2 common pine</li>
//                     <li>1 x 4 common pine</li>
//                     <li>1 x 10 common pine</li>
//                     <li>1/4 inch thick lauan plywood</li>
//                     <li>Finishing Nails</li>
//                     <li>Sandpaper</li>
//                     <li>Wood Glue</li>
//                     <li>Wood Filler</li>
//                     <li>Minwax Oil Based Polyurethane</li>
//                   </ul>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//     )};
// }

