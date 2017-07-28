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
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={compStyle}>
        <h3>{this.props.name} Likes: {this.props.likesCount}</h3>
        <img
          src={this.props.imageUrl}
          alt={`Cute ${this.props.name}`}
          style={{height: 400, width: 400}}/>
        <br />
        <button style={buttonStyle} value={this.props.name} onClick={this.props.onLikeButtonClick}>Like</button>
        <button style={buttonStyle} value={this.props.name} onClick={this.props.onDislikeButtonClick}>Dislike</button>
        </div>
    );
  }
}

export default Pet;
