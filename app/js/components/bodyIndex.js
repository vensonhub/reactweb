import React from 'react';
import PropTypes from 'prop-types';
import BodyChild from './bodyChild';

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
    userid: PropTypes.string.isRequired
};

ComponentBodyIndex.defaultProps = defaultProps;


export default ComponentBodyIndex;
