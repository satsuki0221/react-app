import React from 'react';
import ReactDOM from 'react-dom';
import Image from '../../atoms/common/Image';
import styles from './css/style.css'

export default class Auther extends React.Component{

  constructor(props) {
    super(props);
  }

  render(){
    const ALT = this.props.imgalt || ''
    return(
      <a href="#" className={styles.author}>
        <span className={styles.name}>
          {this.props.name}
        </span>
        <Image
          imgsrc={'./app/components/module/auther/img/vtw2OvvL.jpg'}
          imgalt="yugo"
        />
      </a>
    );
  }

}
