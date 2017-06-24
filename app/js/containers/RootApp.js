import React from 'react';
import {Provider,connect} from 'react-redux';
import {Router,Route,browserHistory} from 'react-router';
import {syncHistoryWithStore,routerReducer} from 'react-router-redux';
import Counter from '../components/Counter/Counter';
import {Inc,Dec} from '../components/Counter/CounterRedux';




//mapStateToProps mapDispatchToProps
const mapStateToProps =(state)=>{
  // console.log(state);
  return {
    value:state
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    onIncrement:()=>dispatch(Inc()),
    onDecrement:()=>dispatch(Dec())
  }
}
const RootApp = connect(mapStateToProps,mapDispatchToProps)(Counter);

export default RootApp;
