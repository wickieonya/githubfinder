import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    const url = `https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;
    axios
      .get(url)
      .then(response => {
        this.setState({ users: response.data, loading: false });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" />
        <div className="container">
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
