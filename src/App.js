import React, {Component} from 'react';
import Cards from './components/Cards/Cards';
import Navigation from './components/Navigation/Navigation';
import Name from './components/Name/Name';
import Status from './components/Status/Status';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Navigation/>
        <Name />
        <Status />
        <Cards />
      </div>
    );
  }
}

export default App;
