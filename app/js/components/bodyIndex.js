import React from 'react';
import PropTypes from 'prop-types';
import BodyChild from './bodyChild';
import ReactMixin from 'react-mixin';
import MixinLog from './Mixins';

const defaultProps = {
  username:'default value'
}

class ComponentBodyIndex extends React.Component{
  constructor(){
    super()
    this.state = {val:1};
  }
  changeUserInfo(age){
    this.setState({val:age});
    this.refs.one.style.color = 'red';
    MixinLog.log();
  }
  handleChildValueChange(event){
    this.setState({val:event.target.value})
  }
  render(){
    {/*
      setTimeout(()=>{
        this.setState({val:this.state.val+1});
      },4000);
      */}
    return (
      <section>
        {this.state.val}| {this.props.userid}| {this.props.username}
        <input type="button" ref="one" value="提交=>99" onClick={this.changeUserInfo.bind(this,99)}/>
        <BodyChild {...this.props} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
      </section>
    )
  }
}

ComponentBodyIndex.propTypes = {
    userid: PropTypes.number.isRequired
};

ComponentBodyIndex.defaultProps = defaultProps;

ReactMixin(ComponentBodyIndex.prototype,MixinLog);


export default ComponentBodyIndex;
