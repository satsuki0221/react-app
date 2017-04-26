import React, { PropTypes } from 'react';

const Time = ({datetime, date}) => (
  <time dateTime={datetime} >{date}</time>
)

Image.propTypes = {
  datetime : PropTypes.string.isRequired,
  date     : PropTypes.string.isRequired,
}

export default Time;
