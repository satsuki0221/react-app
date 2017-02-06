import React from 'react';

export default class Image extends React.Component{

  constructor(props) {
    super(props);
  }

  render(){
    const ALT = this.props.imgalt || ''
    return(
      <img src={this.props.imgsrc} alt={ALT} />
    );
  }

}
