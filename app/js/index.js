var React = require('react');
var ReactDOM = require('react-dom');
import Handler from './components/Handler';
import '../css/reset.css';

class Index extends React.Component{

  componentWillMount(){
    console.log("Index-componentWillMount");
  }
  componentDidMount(){
    console.log("Index-componentDidMount");
  }

  componentWillReceiveProps(nextProps){
    console.log("Index-componentWillReceiveProps",nextProps);
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log("Index-shouldComponentUpdate");
    return true;
  }
  componentWillUpdate(nextProps,nextState){
    console.log(nextProps,nextState);
    console.log("Index-componentWillUpdate");
  }
  componentDidUpdate(prevProps,prevState){
    console.log(prevProps,prevState);
    console.log("Index-componentDidUpdate");
  }
  componentWillUnmount(){
    console.log("Index-componentWillUnmount");
  }
  render(){
    console.log("Index-render");
    return (
      <div>
        <Handler/>
      </div>
    )
  }
}
// Index.propTypes = {
//   nameProp:React.PropTypes.string
// };
// Index.defaultProps = {
//   name:'react'
// }


ReactDOM.render(<Index/>, document.getElementById('app'));
