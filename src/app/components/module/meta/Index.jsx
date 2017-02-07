import React, { PropTypes } from 'react';
import Auther from '@/app/components/module/auther/Article';
import Time from '@/app/components/atoms/common/Time';
import styles from './style'

const Meta = () => (
  <div>
    <Time datetime="2015-11-1" date="November 1, 2015" />
    <Auther name="yugo" />
  </div>
)

export default Meta;
