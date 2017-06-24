import React from 'react';

class About extends React.Component{


  render(){
    let {message,more} = this.props.params;
    console.log(message,more);
    return (
      <div>

        About React-Router
      </div>
    )
  }
}

export default About;
