import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import axios from "axios";
import "./App.css";

//class based component
class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  //Get all the users
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GIT_ID}&client_secret=${process.env.REACT_APP_GIT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  //Search GitHub users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GIT_ID}&client_secret=${process.env.REACT_APP_GIT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };
  //Clear users form state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  //alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 2000);
  };

  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
