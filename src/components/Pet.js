import React, { Component } from 'react';

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

class Pet extends Component {
  handleLikeButtonClick() {
    console.log(this.props.name, 'Liked');
  }

  handleDislikeButtonClick() {
    console.log(this.props.name, 'Disliked');
  }

  render() {
    return (
      <div style={compStyle}>
        <h3>{this.props.name} component</h3>
        <img
          src={this.props.imageUrl}
          alt={this.props.imageText}
          style={{height: 400, width: 400}}/>
        <br />
        <button style={buttonStyle} onClick={this.handleLikeButtonClick}>Like</button>
        <button style={buttonStyle} onClick={this.handleDislikeButtonClick}>Dislike</button>
        </div>
    );
  }
}

export default Pet;
