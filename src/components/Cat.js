import React from 'react';

var Cat = function() {
  return (
    <div style={compStyle}>
      <h3>Cat component</h3>
      <img
        src="http://www.cutestpaw.com/wp-content/uploads/2011/11/HALP.jpeg"
        alt="Cute Cat"
        style={{height: 400, width: 400}}/>
    </div>
  );
}

var compStyle = {
  display: 'inline-block',
  marginLeft: 'auto',
  marginRight: 'auto'
}

export default Cat;
