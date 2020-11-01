import React from 'react'
// import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import TriviaGame from './components/TriviaGame'
import Leaderboard from './components/Leaderboard'



 class App extends React.Component {
   
  state ={
    loggedIn: false,
    username: ""
  }

  handleUser = (user) => {
   
    console.log('hello')
    console.log(user)
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  render(){

    console.log(this.state.loggedIn)
  return (
    <div className="App">
      {this.state.loggedIn?
      <div>
        <TriviaGame />
      </div>
      :
      <Login 
        loggedIn = {this.state.loggedIn} 
        handleUser = {this.handleUser}
      />
  }
    </div>
  );
}
 }

export default App;

///will make items rotate
{/* <div className="App-logo" >hello</div> */}