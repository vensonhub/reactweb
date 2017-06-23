import React from 'react';
import ReactDOM from 'react-dom';

var headerIndex = require("../../css/index.css");

class ComponentHeader extends React.Component{
  constructor(){
    super()
    this.state={
      minHeader:false
    };
  };

  switchHeader(){
    this.setState({
        minHeader:!this.state.minHeader
    });
  };

  render(){
    const styleComponentHeader = {
      header:{
        backgroundColor:"#333333",
        color:"#FFF",
        paddingTop:"15px",
        paddingBottom:"15px"
      }
    }
    console.log(headerIndex);
    return (

      <header style={styleComponentHeader.header}
        className={this.state.minHeader?headerIndex.smallFontSize:headerIndex.bigFontSize}
         onClick={this.switchHeader.bind(this)}>
        header
      </header>
    )
  }
}

export default ComponentHeader;
