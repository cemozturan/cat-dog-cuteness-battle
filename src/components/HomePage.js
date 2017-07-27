import React from 'react';
import Cat from './Cat';
import Dog from './Dog';

var HomePage = function() {
  return (
    <div>
      <h1 style={style}>Welcome to Cat vs Dog Cuteness Battle</h1>
      <div style={{marginTop: 60, textAlign: 'center'}}>
        <Cat />
        {' '}
        <Dog />
      </div>
    </div>
  );
}

var style = {
  textAlign: 'center',
  fontSize: '2em',
  color: 'rebeccapurple'
};

export default HomePage;
