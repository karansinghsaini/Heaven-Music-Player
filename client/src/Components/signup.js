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
    // eslint-disable-next-line no-undef
    state = {
      data: [],
      name: "",  
      email: "",
      password: "",
      intervalIsSet: false
    };
    this.setName = this.setName.bind(this)
    this.setEmail = this.setEmail.bind(this)
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

  setName(name) {
    this.setState({name: name})
  }

  setEmail(email) {
    this.setState({email: email})
  }

  setPassword(password) {
    this.setState({password: password})
  }

  putDataToDB = (emailToAdd) => {
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
    axios.post("http://localhost:3001/api/createUser", {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }).then(res => console.log(res.data));
  }
};

  render() {
    return (
      <div>
        <Input id ="name" labelName="Name: " inputType="text" parentFunction={this.setName}  />
        <Input id ="email" labelName="Email: " inputType="text" parentFunction={this.setEmail}  />
        <Input id ="password" labelName="Password: " inputType="password" parentFunction={this.setPassword} />
        <button onClick={this.putDataToDB(this.state.email)}>{this.props.buttonName}</button>
      </div>
    )
  }
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
