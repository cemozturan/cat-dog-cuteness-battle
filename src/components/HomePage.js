import React from 'react';
import Cat from './Cat';
import Dog from './Dog';

var HomePage = function() {
  var style = {
    textAlign: 'center',
    fontSize: '2em',
    color: 'rebeccapurple'
  };
  return (
    <div>
      <h1 style={style}>Welcome to Cat vs Dog Cuteness Battle</h1>
      <div style={{marginTop: 60, textAlign: 'center'}}>
        <Cat />
        <Dog />
      </div>
    </div>
  );
}

export default HomePage;
