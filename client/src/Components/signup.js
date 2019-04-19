import React from 'react';
import axios from 'axios';
import './login.css';

class SignupForm extends React.Component {

 render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
        <label>Enter Your Name</label>
        <input type="text" ref="name" placeholder="Name" required />
        <label>Enter Your Email Id</label>
        <input type="text" ref="eid" placeholder="email id" required />
        <label>Enter Your Password</label>
        <input type="password" ref="pswd" placeholder="password" required />
        <input type="submit" value="Sign Up" />
        </form>
      </div>
    )
  }

  //checking if email is already used or not and signing up.
  handleSubmit = (e) => {
    e.preventDefault();
        
      //getting value from form
      fetch("http://localhost:3001/api/getUser")
      .then(data => {
        return data.json();
      })
      .then(json => {
          var NameToAdd = this.refs.name.value;
          var emailToAdd = this.refs.eid.value;
          var passwordToAdd = this.refs.pswd.value;
          let flag = 0;
        json.forEach(dat => { 
          if (dat.email === emailToAdd){
          flag = 1;
          return;
        }
      });
        if(flag === 1){
           alert("Email ID Already used. Login Instead");
        }
        else{
            axios.post("http://localhost:3001/api/createUser", {
            name: NameToAdd,
            email: emailToAdd,
            password: passwordToAdd
       }).then(res => alert("Successfully Logged In"));
      }
          
        });        
    };
  };


class Content extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <SignupForm buttonName="Submit"/>
      </div>
    )
  }
}

class Signup extends React.Component {
  render() {
    return (
      <div className="logins">
        <Content title="Enter Details To SignUp"/>  
      </div>
    )
  }
}

export default Signup;
