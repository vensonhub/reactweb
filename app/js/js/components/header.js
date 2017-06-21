import React from 'react';
import ReactDOM from 'react-dom';

class ComponentHeader extends React.Component{
  render(){
    return (
      <header className="header">
        <div className="left">left</div>
        <div className="main">main</div>
        <div className="right">right</div>
      </header>
    )
  }
}

export default ComponentHeader;
