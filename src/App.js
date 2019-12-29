import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    username: 'ashley'
  }

  inputHandler = (event) => {
    console.log("hey!");
    this.setState({username: event.target.value});

  }

  render(){
    return (
      <div className="App">
        <UserInput acceptUsername = {this.inputHandler}/> 
        <UserOutput username = {this.state.username}/>
        <UserOutput/> 
        <UserOutput/> 
      </div>
    );
  }
}

export default App;
