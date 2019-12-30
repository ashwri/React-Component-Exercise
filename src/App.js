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
        <h4>Base Syntax Assignment</h4>
        <p>This assignment utilises concepts such as states, binding and props. 
          It also introduces styling in React.
        </p> 
        <UserInput acceptUsername = {this.inputHandler} currentName = {this.state.username}/> 
        <UserOutput username = {this.state.username} type = "state"/>
        <UserOutput username= "Stephanie" type= "hardcoded username"/> 
        <UserOutput type="no username"/> 
      </div>
    );
  }
}

export default App;
