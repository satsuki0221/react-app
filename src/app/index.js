/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';

import 'sanitize.css/sanitize';

const Test = (props: { text: number }) => {
  return <div>{props.text}</div>
}

ReactDOM.render(
  <Test text={'テスト'} />,
  document.getElementById("root")
);
