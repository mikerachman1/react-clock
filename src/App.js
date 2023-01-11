import React, { Component } from 'react';
import Clock from './MyComponent';
import Toggle from './Toggle';
import Counter from './Counter';
import LifecycleCounter from './LifecycleCounter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40,
    }
    this.mountCounter = () => this.setState({mount: true})
    this.unmountCounter = () => this.setState({mount: false})
    this.ignoreProp = () => this.setState({ignoreProp: Math.random()})
    this.seedGenerator = () => this.setState({seed: Number.parseInt(Math.random() * 100)})
  }
  render() {
    return(
      <div>
        <button onClick={this.mountCounter} disabled={this.state.mount}>Mount Counter</button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>Unmount Counter</button>
        <button onClick={this.ignoreProp}>Ignore Prop</button>
        <button onClick={this.seedGenerator}>Generate Seed</button>

        {this.state.mount ? 
        <LifecycleCounter 
          ignoreProp={this.state.ignoreProp}
          seed={this.state.seed}
          /> 
        : 
        null}
      </div>
    );
  }
}


export default App;