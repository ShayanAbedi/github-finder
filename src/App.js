import React, { Fragment, Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

//function based component
// const App = () => {

//class based component
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Welcome!</h1>
      </div>
    );
  }
}

export default App;
