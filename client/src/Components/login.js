import React from 'react';
import './login.css';


class LoginForm extends React.Component {
 
  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
        <label>Enter Your Email Id</label>
        <input type="text" ref="eid" placeholder="email id" required />
        <label>Enter Your Password</label>
        <input type="password" ref="pswd" placeholder="password" required />
        <input type="submit" value="Login In" />
        </form>
      </div>
    )
  }


  handleSubmit = (e) => {
    e.preventDefault();
        
      //getting value from form
      fetch("http://localhost:3000/api/getUser")
      .then(data => {
        return data.json();
      })
      .then(json => {
        var emailToCheck = this.refs.eid.value;
        var passwordToCheck = this.refs.pswd.value;
        let flag = 0;
        json.forEach(dat => {
            if (dat.email === emailToCheck){
              if(dat.password === passwordToCheck){
                flag = 1;
                alert("Welcome back");
                return;
              }
              else {
                flag = 1;
                alert('Password is Wrong');
              }
           }
        });
        if (flag === 0) {
        alert("User not found");
        }
          
        });        
    };
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <LoginForm buttonName="Submit"/>
      </div>
    )
  }
}

class Main extends React.Component {
  render() {
    return (
    
      <div className="logins">        
        <Content title="Enter Details to LogIn"/>
      </div>
     
    )
  }
}

export default Main;
