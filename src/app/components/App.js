import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import styles from './css/style.css'

export default class Hello extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Harper',
      lastName: 'Perez'
    };
  }

  render(){
    return(
      <h1 className={styles.hogeHoge}>
        Hello, {this.state.firstName} {this.state.lastName}!
      </h1>
    );
  }

}
