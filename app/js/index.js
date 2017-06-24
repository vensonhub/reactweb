import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { createStore } from 'redux';

//reducer
const counter = (count=0,action)=>{
  switch(action.type){
    case "INCREMENT":
      return count + 1;
    case "DECREMENT":
      return count - 1;
    default:
      return count;
  }
}

let store = createStore(counter);

class Counter extends React.Component{
  render(){
    return (
      <div>
        <h1>计数器:{this.props.value}</h1>
        <button onClick={this.props.onIncrement}>点+1</button>
        <button onClick={this.props.onDecrement}>点-1</button>
      </div>
    )
  }
}

const listener = ()=>{
  ReactDOM.render(<Counter
    value={store.getState()}
    onIncrement={store.dispatch({type:"INCREMENT"})}
    onDecrement={store.dispatch({type:"DECREMENT"})}
  />, document.getElementById('app'));
}
listener();
store.subscribe(listener);
