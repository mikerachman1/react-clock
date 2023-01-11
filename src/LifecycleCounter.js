import React, { Component } from "react";

class LifecycleCounter extends Component {
  constructor (props) {
    console.log('Constructor')
    super(props)
    this.state = {
      counter: 0,
      seed: 0
    };
    this.increment = () => this.setState({counter: this.state.counter+1})
    this.decrement = () => this.setState({counter: this.state.counter-1})

  }
  
  static getDerivedStateFromProps(props, state) {
    if(props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed,
      }
    }
    return null
  }

  componentDidMount() {
    console.log('Component did MOUNT')
    console.log('------------------')
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp) {
      console.log('Should Component Update - DO NOT RENDER')
      return false
    }
    console.log('Should Component Update - RENDER')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Get snapshot')
    return null
  }

  render() {
    console.log('Render')
    return(
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
          Counter: {this.state.counter}
        <div className="counter">
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component did UPDATE')
    console.log('------------------')

  }

  componentWillUnmount() {
    console.log('Component will UNMOUNT')
    console.log('---------------')
  }
}

export default LifecycleCounter;