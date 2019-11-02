import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from './components/layout/Alert';
import about from './components/pages/about';
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    user: {},
    users: [],
    loading: false,
    alert: null,
    repos: [],
  };
  
  // default page
  componentDidMount() {
    this.searchUsers('flask');
  }

  // search GitHub users
  searchUsers = text => {
    this.setState({ loading: true });
    const url = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;
    axios.get(url)
    .then(response => this.setState({users: response.data.items, loading: false}))
    .catch( error => console.log('searchUsers error', error));
  }

  // get single github user
  getUser = username => {
    this.setState({ loading: true });
    const url = `https://api.github.com/users/${username}`;
    axios.get(url)
    .then(response => this.setState({ user: response.data, loading: false}))
    .catch(error => console.log('getUser error', error));
  }

  // get user repos
  getUserRepos = username => {
    this.setState({ loading: true });
    const url = `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`;
    axios.get(url)
    .then(response => this.setState({ repos: response.data, loading: false}))
    .catch(error => console.log('getUser error', error));
  }

  // clear users from the state
  clearUsers = event => {
    this.setState({ users: [], loading: false });
  }

  // set alert 
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type }});

    setTimeout(() => this.setState({ alert: null }), 5000);
    console.log(this.state);
  }

  render() {

    const { users, loading, user, repos } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar title="Github Finder" />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search 
                    searchUsers={this.searchUsers} 
                    clearUsers={this.clearUsers}
                    showClear={ users.length > 0 ? true : false }
                    setAlert={ this.setAlert }
                  />
                  <Users users={users} loading={loading} />
                </Fragment>
              )} />
              <Route exact path='/about' component={about} />
              <Route exact path='/user/:username' render={ props => (
                <User 
                  { ...props } 
                  getUser={this.getUser} 
                  user={user}
                  loading={loading} 
                  getUserRepos={this.getUserRepos}
                  repos={repos}
                />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
