import React, { PropTypes } from 'react';
import Image from '@/app/components/atoms/common/Image';
import styles from './style'

const Auther = ({name}) => (
  <a href="#" className={styles.author}>
    <span className={styles.name}>{name}</span>
    <Image src = 'app/img/vtw2OvvL.jpg' alt = {name} />
  </a>
)

Auther.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Auther;
