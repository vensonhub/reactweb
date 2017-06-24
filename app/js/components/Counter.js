import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component{
  constructor(){
    super();
  }
  render(){
    console.log(this.props);
    return (
      <div>
        <h1>计数器:{this.props.value}</h1>
        <button onClick={this.props.onIncrement}>+1</button>
        <button onClick={this.props.onDecrement}>-1</button>
      </div>
    )
  }
}

Counter.propTypes = {
  
}

export default Counter;
