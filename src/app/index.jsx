/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css';

const Test = ({ text = 'test' }: {
  text?: string,
}) => (
  <div>{text}</div>
);

ReactDOM.render(
  <Test />,
  document.getElementById('root'),
);
