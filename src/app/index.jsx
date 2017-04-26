/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css';

const Test = (props: {
  text: string,
}) => (
  <div>{props.text}</div>
);

ReactDOM.render(
  <Test text={'テスト'} />,
  document.getElementById('root'),
);
