import React, { Component } from 'react';
import Clock from './MyComponent';
import Toggle from './Toggle';
import Counter from './Counter';

function App() {
  return (
    <div>
      <Clock title="Mikes Site" />
      <Toggle />
      <Counter />
    </div>
  )
}


export default App;