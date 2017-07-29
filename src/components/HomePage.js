import React from 'react';
import PetGame from './PetGame';
import Header from './Header';

var HomePage = function(props) {
  return (
    <div>
      <Header />
      <PetGame />
    </div>
  );
};

export default HomePage;
