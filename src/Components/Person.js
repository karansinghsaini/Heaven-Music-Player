import React, { Component } from 'react';
import Info from './Info';
import AddInfo from './AddInfo';


class Person extends Component {
  state ={
      infos: [
      { name: 'Karan', birthday:'29 April 1997', aboutMe:'I am a Songwriter', id: 1 },
      { name: 'Rahul', birthday:'10 May 1990', aboutMe:'I love Soccer', id: 2 }
    ]
  }
  deleteInfo = (id)=>{
      //console.log(id);
      let infos = this.state.infos.filter(info=>{
          return info.id!==id;
      })
      console.log('After Deleting',infos);
      this.setState({
          infos
      })
  }

  addInfo = (info) => {
    console.log('Inside App Component', info);
    info.id = Math.floor(Math.random() * 10);
    console.log(info.id);
    let infos = [...this.state.infos, info];
    this.setState({
      infos
    })
  }
  componentDidMount(){
      console.log('Component has been mounted');
  }
componentDidUpdate(prevProps, prevState){
    console.log("Component updated");
    console.log(prevProps, prevState);
}
  render(){
      return (
        <div className="App container" style={{backgroundColor: 'brown'}}>
          <h4 className="center">Information of People</h4>
          <Info infos={this.state.infos} deleteInfo={this.deleteInfo}/>
          <AddInfo addInfo={this.addInfo} />
        </div>
      );
  }
}

export default Person;
// ... spread operator to create a copy
