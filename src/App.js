import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
constructor(props){
  super(props);

  this.state ={
    firstname: '',
    lastname:''
  };
  this.saveToDb = this.saveToDb.bind(this);
}
saveToDb(){
  console.log(this.state.firstname, this.state.lastname);
  axios.post('/api/test', this.state);

}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.firstname}
        {this.state.lastname}
        <h1> First Name </h1> 
        <input onChange={event => this.setState({ firstname: event.target.value })} />
        
        
        <h1> Last Name </h1> 
        <input onChange={event => this.setState({ lastname: event.target.value })} />

        <button onClick = {this.saveToDb}> Save to Db </button>
        

      </div>
    );
  }
}

export default App;
