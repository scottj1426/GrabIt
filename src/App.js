import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import home from './components/home'


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
      <BrowserRouter>
       
          <Switch>
            <Route exact path='/' component={home}></Route>
       
          </Switch>
          </BrowserRouter>
    );
  }
}

export default App;
