import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import {Provider,connect} from 'react-redux';

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
//mapStateToProps mapDispatchToProps
const mapStateToProps =(state)=>{
  console.log(state);
  return {
    value:state
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    onIncrement:()=>dispatch({type:"INCREMENT"}),
    onDecrement:()=>dispatch({type:"DECREMENT"})
  }
}
const RootApp = connect(mapStateToProps,mapDispatchToProps)(Counter);

ReactDOM.render(
  <Provider store={store}>
    <RootApp />
  </Provider>
  , document.getElementById('app'));
