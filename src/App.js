import React, { Component } from 'react';

import Clock from './Clock';
import Button from './Button';

class App extends Component {
  render(){
    return (
      <div className="wrapper">
    		<Clock />
				<Button />
      </div>
    );
  }
}



export default App;
