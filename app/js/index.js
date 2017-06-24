import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Router,Route,hashHistory,Link,IndexRoute,IndexLink,Redirect,browserHistory} from 'react-router';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Navlink from './components/Navlink';
import '../css/reset.css';

class Index extends React.Component{
  handleSubmit(e){
    e.preventDefault()
    const userName =e.target.elements[0].value;
    const repo = e.target.elements[1].value;
    const path = `/about/${userName}/${repo}`

    // browserHistory.push(path);
    this.context.router.push(path);
  }

  goBackWithMe(){
    this.context.router.goBack();
  }

  render(){
    return (
      <div>
        <h1>hello react router</h1>
        <ul>
          <li>
            {/*<Navlink url="/" linkName="首页"></Navlink>*/}
            <IndexLink to="/" activeStyle={{fontSize:"28px",color:"red"}}>首页</IndexLink>
          </li>
          <li>
            <Navlink url="/contact" linkName="联系"></Navlink>
          </li>
          <li>
            <Navlink url="/about" linkName="关于我们"></Navlink>
          </li>
          <li>
            <form action="" onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" placeholder="user name"/>
              <input type="text" placeholder="repo"/>
              <button type="submit">go with me</button>
              {/*<button onClick={()=>{browserHistory.goBack()}}>go back</button>*/}
              <button onClick={this.goBackWithMe.bind(this)}>go back</button>
            </form>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

Index.contextTypes = {
  router:PropTypes.object
}

const router = (
  <Router history={browserHistory}>
    <Route path="/" components={Index}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="contact" components={Contact}></Route>
      <Route path="about/:message/:more" components={About}></Route>
      <Redirect from="about" to="about/react/router"></Redirect>
    </Route>

  </Router>
)
// / => Index
// /contact => Index + Contact

ReactDOM.render(router, document.getElementById('app'));
