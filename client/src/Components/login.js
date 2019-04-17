import React from 'react';
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

class LoginForm extends React.Component {
  getInitialState =() => {
    return({
        data: []    
    });
}

 
  render() {
    return (
      <div className='container'>
        <form onsubmit = {this.handleSubmit}>
        <label>Enter Your Email Id</label>
        <input type="text" ref="eid" placeholder="email id" required />
        <label>Enter Your Password</label>
        <input type="password" ref="pswd" placeholder="password" required />
        <input type="submit" value="Login In" />
        </form>
      </div>
    )
  }

  handleSubmit = () => {
    fetch("http://localhost:3001/api/getData")
      .then(data => data.json())    
    .then( () => {
      //getting value from form
      var emailToCheck = this.refs.eid.value;
      var passwordToCheck = this.refs.pswd.value;
      let flag = 0;
      this.state.data.forEach(dat => {
        if (dat.email === emailToCheck){
          if(dat.password === passwordToCheck){
            flag = 1;
            alert("Welcome back");
            return;
          }
          else alert('Password is Wrong');
        }
      });
      if (flag === 1) {
        alert("User not found");
      }
    });
};

}

class Content extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <LoginForm buttonName="Submit"/>
      </div>
    )
  }
}

class Main extends React.Component {
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

export default Main;
