import React from 'react';
import Pet from './Pet';

var style = {
  textAlign: 'center',
  fontSize: '2em',
  color: 'rebeccapurple'
};

var HomePage = function() {
  return (
    <div>
      <h1 style={style}>Welcome to Cat vs Dog Cuteness Battle</h1>
      <div style={{marginTop: 60, textAlign: 'center'}}>
        <Pet
          imageUrl="http://www.cutestpaw.com/wp-content/uploads/2011/11/HALP.jpeg"
          imageText="Cute Cat"
          name="Cat" />
        {' '}
        <Pet
          imageUrl="https://s-media-cache-ak0.pinimg.com/736x/82/b5/42/82b542ced27fcefc0935373e7c7db113--dachshund-puppies-wiener-dogs.jpg"
          imageText="Cute Dog"
          name="Dog" />
      </div>
    </div>
  );
}

export default HomePage;
