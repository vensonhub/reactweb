import React from 'react';
import {Link} from 'react-router';

import index from '../../css/index.css';

class Navlink extends React.Component{
  render(){
    return (
      <Link to={this.props.url} activeClassName={index.active}>{this.props.linkName}</Link>
    )
  }
}

export default Navlink;
