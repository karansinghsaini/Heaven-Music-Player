import React from 'react';
import './login.css';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
      </div>
    )
  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

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

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",  
      email: "",
      password: ""
    }
    
    this.setName = this.setName.bind(this)
    this.setEmail = this.setEmail.bind(this)
    this.setPassword = this.setPassword.bind(this)
  }

  setName(name) {
    this.setState({name: name})
  }

  setEmail(email) {
    this.setState({email: email})
  }

  setPassword(password) {
    this.setState({password: password})
  }

  putDataToDB = () => {
    axios.post("http://localhost:3001/api/createUser", {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }).then(res => console.log(res.data));
  };

  render() {
    return (
      <div>
        <Input id ="name" labelName="Name: " inputType="text" parentFunction={this.setName}  />
        <Input id ="email" labelName="Email: " inputType="text" parentFunction={this.setEmail}  />
        <Input id ="password" labelName="Password: " inputType="password" parentFunction={this.setPassword} />
        <button onClick={this.putDataToDB}>{this.props.buttonName}</button>
      </div>
    )
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props)
  }

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
