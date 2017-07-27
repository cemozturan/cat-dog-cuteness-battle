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
    this.state = {
      likesCount: 0
    };
    /*
      Unless you use the ES6 arrow functions, this is the best practice to make sure the
      "this" keyword inside the class functions refer to the component instance.
      When we do the binding here in the constructor, they get bound only once.
      If we bind inside the onClick HTML attribute, then the binding will happen again and again
      every time the component is rendered.
    */
    this.handleLikeButtonClick = this.handleLikeButtonClick.bind(this);
    this.handleDislikeButtonClick = this.handleDislikeButtonClick.bind(this);
  }

  handleLikeButtonClick() {
    this.setState({likesCount: this.state.likesCount+1});
  }

  handleDislikeButtonClick() {
    this.setState({likesCount: this.state.likesCount-1});
  }

  render() {
    return (
      <div style={compStyle}>
        <h3>{this.props.name} Likes: {this.state.likesCount}</h3>
        <img
          src={this.props.imageUrl}
          alt={`Cute ${this.props.name}`}
          style={{height: 400, width: 400}}/>
        <br />
        <button style={buttonStyle} onClick={this.handleLikeButtonClick}>Like</button>
        <button style={buttonStyle} onClick={this.handleDislikeButtonClick}>Dislike</button>
        </div>
    );
  }
}

export default Pet;
