import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,Link} from 'react-router';
import Contact from './components/Contact';
import '../css/reset.css';

class Index extends React.Component{


  render(){
    return (
      <div>
        <h1>hello react router</h1>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/contact">联系</Link>
          </li>
        </ul>
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
