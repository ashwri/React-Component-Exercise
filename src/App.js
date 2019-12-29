import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    username: 'ashley'
  }

  inputHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render(){
    return (
      <div className="App">
        <UserInput acceptUsername = {this.inputHandler} currentName = {this.state.username}/> 
        <UserOutput username = {this.state.username}/>
        <UserOutput username= "Stephanie"/> 
        <UserOutput/> 
      </div>
    );
  }
}

export default App;
