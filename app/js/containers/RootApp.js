import React from 'react';
import {Provider,connect} from 'react-redux';
import Counter from '../components/Counter';


//mapStateToProps mapDispatchToProps
const mapStateToProps =(state)=>{
  // console.log(state);
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

export default RootApp;
