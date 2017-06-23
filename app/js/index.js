var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import ComponentBodyIndex from './components/bodyIndex';
import ComponentFooter from './components/footer';
import '../css/reset.css';

class Index extends React.Component{


  render(){
    return (
      <div>
        <ComponentHeader/>
        <ComponentBodyIndex userid={111} username={"venson"} />
        <ComponentFooter />
      </div>
    )
  }
}


ReactDOM.render(<Index/>, document.getElementById('app'));
