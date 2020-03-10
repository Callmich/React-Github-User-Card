import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
     user: [],
     userName: '',
     followers: []
    }
  }

  componentDidMount(){
    axios
      .get('https://api.github.com/users/Callmich')
      .then(response => {
        // console.log('response', response.data)
        this.setState({
          user: response.data
        })
        // console.log('new state for user', this.state.user)
      })
      .catch(error => {
        console.log('There was an error', error)
      })
    axios
      .get('https://api.github.com/users/Callmich/followers')
      .then(response1 => {
        // console.log('response for followers', response1)
        this.setState({
          followers: response1.data
        })
        console.log('new state for user', this.state.user);
        console.log('new state for followers', this.state.followers)
      })
      .catch(error1 => {
        console.log("Error with 2nd Axios", error1)
      })
  }

  render(){
    return (
      <div>Hellow World</div>
    )
  }
}

export default App;
