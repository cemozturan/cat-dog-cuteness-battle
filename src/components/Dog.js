import React, { Component } from 'react';

class Dog extends Component {
  handleLikeButtonClick() {
    console.log('Dog liked');
  }

  handleDislikeButtonClick() {
    console.log('Dog disliked');
  }

  render() {
    return (
      <div style={compStyle}>
        <h3>Dog component</h3>
        <img
          src="https://s-media-cache-ak0.pinimg.com/736x/82/b5/42/82b542ced27fcefc0935373e7c7db113--dachshund-puppies-wiener-dogs.jpg"
          alt="Cute Dog"
          style={{height: 400, width: 400}}/>
        <br />
        <button style={buttonStyle} onClick={this.handleLikeButtonClick}>Like</button>
        <button style={buttonStyle} onClick={this.handleDislikeButtonClick}>Dislike</button>
        </div>
    );
  }
}

var buttonStyle = {
  height: '25px',
  width: '70px',
  marginTop: '10px',
  marginLeft: '5px',
  marginRight: '5px'
};

var compStyle = {
  display: 'inline-block',
  marginLeft: 'auto',
  marginRight: 'auto'
};

export default Dog;
