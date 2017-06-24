import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,Link} from 'react-router';
import Contact from './components/Contact';
import About from './components/About';
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
          <li>
            <Link to="/about">关于我们</Link>
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
      <Route path="about" components={About}></Route>
    </Route>

  </Router>
)
// / => Index
// /contact => Index + Contact

ReactDOM.render(router, document.getElementById('app'));
