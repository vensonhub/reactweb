var React = require('react');
var ReactDOM = require('react-dom');
import Message from './Message';

class Handler extends React.Component{
  constructor() {
    super();
    this.state = {val: 0,destroyed:false};
  }

  update(e){
    this.setState({
      val:this.state.val+1
    })
  }

  destroy(e){
    this.setState({
      destroyed:true
    })
  }

  remove(){
    ReactDOM.unmountComponentAtNode(document.getElementById('app'))
  }

  render(){
      if(this.state.destroyed)return null;

      return (
        <div>
          <Message val={this.state.val}/>
          <button onClick={this.update.bind(this)}>{this.state.val}</button>
          <button onClick={this.destroy.bind(this)}>组件移除1</button>
          <button onClick={this.remove.bind(this)}>组件移除2</button>
        </div>
      )
  }
}

export default Handler;
