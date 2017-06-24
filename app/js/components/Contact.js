import React from 'react';
import PropTypes from 'prop-types';

class Contact extends React.Component{

  componentDidMount(){
    // console.log("did mount");
    this.context.router.setRouteLeaveHook(this.props.route,this.leaveHook)
  }
  leaveHook(nextLocation){
    return "you want leave?"
  }

  render(){
    console.log(this.context);
    return (
      <div>
        Contact React-Router
      </div>
    )
  }
}

Contact.contextTypes = {
  router:PropTypes.object
}

export default Contact;
