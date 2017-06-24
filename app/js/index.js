import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,Link} from 'react-router';
import Contact from './components/Contact';
import About from './components/About';
import Navlink from './components/Navlink';
import '../css/reset.css';

class Index extends React.Component{


  render(){
    return (
      <div>
        <h1>hello react router</h1>
        <ul>
          <li>
            <Navlink url="/" linkName="首页"></Navlink>
          </li>
          <li>
            <Navlink url="/contact" linkName="联系"></Navlink>
          </li>
          <li>
            <Navlink url="/about" linkName="关于我们"></Navlink>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

const router = (
  <Router history={hashHistory}>
    <Route path="/" components={Index}>
      <Route path="contact" components={Contact}></Route>
      <Route path="about/:message/:more" components={About}></Route>
    </Route>

  </Router>
)
// / => Index
// /contact => Index + Contact

ReactDOM.render(router, document.getElementById('app'));
