import React from 'react';

var Dog = function() {
  return (
    <div style={compStyle}>
      <h3>Dog component</h3>
      <img
        src="https://s-media-cache-ak0.pinimg.com/736x/82/b5/42/82b542ced27fcefc0935373e7c7db113--dachshund-puppies-wiener-dogs.jpg"
        alt="Cute Dog"
        style={{height: 400, width: 400}}/>
      </div>
  );
}

var compStyle = {
  display: 'inline-block',
  marginLeft: 'auto',
  marginRight: 'auto'
}

export default Dog;
