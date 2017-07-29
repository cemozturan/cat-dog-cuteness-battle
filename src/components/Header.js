import React from 'react';

var style = {
  textAlign: 'center',
  fontSize: '2em',
  color: 'rebeccapurple'
};

var Header = function (props) {
  return (
      <h1 style={style}>Welcome to Cat vs Dog Cuteness Battle</h1>
  );
}

export default Header;
