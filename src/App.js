import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios.get('https://api.github.com/users')
    .then(response => {
      this.setState({users: response.data, loading: false})
    })
    .catch(error => console.log(error));
  } 
  render() {
    return (
    <div className="App">
      <Navbar title="Github Finder" />
      <div className="container">
        <Users 
          users={this.state.users}
          loading={this.state.loading}
        />
      </div>
    </div>       
    );
  }
}

export default App;
