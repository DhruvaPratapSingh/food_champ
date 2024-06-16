import React from 'react'
import User from './User'
import UserClass from './Userclass'
import UserContext from '../utils/UserContext';
import {Component} from 'react';
// const About = () => {
//   return (
//     <div>
//       <h1>hello about!</h1>
//       <User/>


//       <UserClass name="hello" location="ndjsjaaij"/>
//     </div>
//   )
// }
class About extends React.Component{
  constructor(props){
    super(props);
    // console.log("parent constructor");
  }
  componentDidMount(){ //use for make api calls
    // console.log("parent did mount")
  }
  render(){
    // console.log("parent render")
    return(
      <div>
         <h1>hello about!</h1>
         <div>
          loggedInUser 
          <UserContext.Consumer>
            {({loggedInUser})=><h2>{loggedInUser}</h2>}
          </UserContext.Consumer>
         </div>
       <UserClass name="hello" location="ndjsjaaij"/>
      </div>
    )
  }
}

export default About
