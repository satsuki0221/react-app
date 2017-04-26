import React, { PropTypes } from 'react';

const Image = ({src, alt}) => (
  <img src={src} alt={alt} />
)

Image.defaultProps = {
  alt: 'image'
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export default Image;
