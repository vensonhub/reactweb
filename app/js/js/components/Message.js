var React = require('react');
var ReactDOM = require('react-dom');

class Message extends React.Component{
  componentWillReceiveProps(nextProps){
    console.log("Message-componentWillReceiveProps",nextProps);

  }
  shouldComponentUpdate(nextProps,nextState){
    console.log("Message-shouldComponentUpdate",nextProps,nextState);
    return true;
  }
  componentWillUpdate(nextProps,nextState){
    console.log("Message-componentWillUpdate",nextProps,nextState);
  }
  componentDidUpdate(prevProps,prevState){
    console.log("Message-componentDidUpdate",prevProps,prevState);
  }
  componentWillMount(){
    console.log("Message-componentWillMount");
  }
  render(){
    console.log("Message-render");
    return(
      <div>
        <span>{this.props.val}</span>
      </div>
    )
  }
  componentDidMount(){
    console.log("Message-componentDidMount");
  }
  componentWillUnmount(){
    console.log("Message-componentWillUnmount");
  }
}

export default Message;
