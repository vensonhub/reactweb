import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import Contact from './components/Contact';
import '../css/reset.css';

class Index extends React.Component{


  render(){
    return (
      <div>
        Hello React-Router
      </div>
    )
  }
}

const router = (
  <Router history={hashHistory}>
    <Route path="/" components={Index}></Route>
    <Route path="/contact" components={Contact}></Route>
  </Router>
)

ReactDOM.render(router, document.getElementById('app'));
