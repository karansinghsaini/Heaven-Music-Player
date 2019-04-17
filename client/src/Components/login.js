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

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVal: ""
    }
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler(e) {
    this.props.parentFunction(e.target.value)
  }

  render() {
    return (
      <div>
        <label>{this.props.labelName}</label>
        <input type={this.props.inputType} id={this.props.id} onChange={this.changeHandler} />
      </div>
    )
  }
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      name: "",  
      email: "",
      password: "",
      intervalIsSet: false
    }
    this.clickHandler = this.clickHandler.bind(this)
    this.setUsername = this.setUsername.bind(this)
    this.setPassword = this.setPassword.bind(this)
  }

  componentDidMount() {
    console.log(this.getDataFromDb())
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb = () => {
    fetch("http://localhost:3001/api/getUser")
      .then(data => data.json());
  };

  setUsername(username) {
    this.setState({username: username})
  }

  setPassword(password) {
    this.setState({password: password})
  }

checkUser = (emailToCheck) => {
  let flag = 0;
  this.state.data.forEach(dat => {
    if (dat.email === emailToCheck){
      flag = 1;
      console.log("Welcome back");
      return;
    }
  });
  if (flag === 1) {
    alert("User not found");
  }
}

  render() {
    return (
      <div>
        <Input id ="username" labelName="Username: " inputType="text" parentFunction={this.setUsername}  />
        <Input id ="password" labelName="Password: " inputType="password" parentFunction={this.setPassword} />
        <button onClick={this.checkUser(this.state.email)}>{this.props.buttonName}</button>
      </div>
    )
  }
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
