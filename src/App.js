import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from 'material-ui/Toggle'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { toggled: false, defaultToggled: false };
  }

  handleToggle(value) {
    this.setState({ toggled: value })
  }

  handleDefaultToggle(value) {
    this.setState({ defaultToggled: value })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div style={{ width: '20%' }}>
          <Toggle label='using toggled property' toggled={this.props.toggled} onToggle={(event, value) => this.handleToggle(value)} />
          <Toggle label='using defaultToggled property' defaultToggled={this.props.toggled} onToggle={(event, value) => this.handleDefaultToggle(value)} />
        </div>
      </div>
    );
  }
}

export default App;
