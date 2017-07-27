import React, { Component } from 'react';

class Cat extends Component {
  handleLikeButtonClick() {
    console.log('Cat liked');
  }

  handleDislikeButtonClick() {
    console.log('Cat disliked');
  }

  render() {
    return (
      <div style={compStyle}>
        <h3>Cat component</h3>
        <img
          src="http://www.cutestpaw.com/wp-content/uploads/2011/11/HALP.jpeg"
          alt="Cute Cat"
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
}

export default Cat;
