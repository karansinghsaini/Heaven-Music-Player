import React from 'react';
import axios from 'axios';
import './login.css';

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return <div><h3>{this.props.text}</h3></div>
  }
}

class SignupForm extends React.Component {
  getInitialState =() => {
    return({
        data: []    
    });
}

 render() {
    return (
      <div className='container'>
        <form onsubmit = {this.handleSubmit}>
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

  handleSubmit = () => {
    fetch("http://localhost:3000/api/getData")
      .then(data => data.json())    
    .then( () => {
      //getting value from form
      var NameToAdd = this.refs.name.value;
      var emailToAdd = this.refs.eid.value;
      var passwordToAdd = this.refs.pswd.value;
      let flag = 0;
      this.state.data.forEach(dat => {
        if (dat.email === emailToAdd){
          flag = 1;
          return;
        }
      });
      if(flag === 1){
        alert("Email ID Already used. Login Instead");
      }
      else{
      axios.post("http://localhost:3000/api/createUser", {
        name: NameToAdd,
        email: emailToAdd,
        password: passwordToAdd
      }).then(res => alert(res.data));
    }
    });
  };
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <SignupForm buttonName="Submit"/>
      </div>
    )
  }
}

class Signup extends React.Component {
  render() {
    return (
      <div className="logins">
        <Header/>
        <Content title="Enter your credentials"/>
        <Footer/>
      </div>
    )
  }
}

export default Signup;
