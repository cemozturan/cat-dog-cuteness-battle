import React, { Component } from 'react';
import Pet from './Pet';

var style = {
  textAlign: 'center',
  fontSize: '2em',
  color: 'rebeccapurple'
};

var buttonStyle = {
  height: '25px',
  marginTop: '30px',
  marginRight: '5px'
};

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catLikes: 0,
      dogLikes: 0
    }
    /*
      Unless you use the ES6 arrow functions, this is the best practice to make sure the
      "this" keyword inside the class functions refer to the component instance.
      When we do the binding here in the constructor, they get bound only once.
      If we bind inside the onClick HTML attribute, then the binding will happen again and again
      every time the component is rendered.
    */
    this.handleLikeButtonClick = this.handleLikeButtonClick.bind(this);
    this.handleDislikeButtonClick = this.handleDislikeButtonClick.bind(this);
    this.handleShowWinnerButtonClick = this.handleShowWinnerButtonClick.bind(this);
    this.handleStartOverButtonClick = this.handleStartOverButtonClick.bind(this);
  }

  handleLikeButtonClick(event) {
    var petName = event.target.value;

    if (petName === 'Cat') {
      this.setState(function(prevState) {
        return {
          catLikes: prevState.catLikes + 1
        }
      });
    } else {
      this.setState(function(prevState) {
        return {
          dogLikes: prevState.dogLikes + 1
        }
      });
    }
  }

  handleDislikeButtonClick(event) {
    var petName = event.target.value;

    if (petName === 'Cat') {
      this.setState(function(prevState) {
        return {
          catLikes: prevState.catLikes - 1
        }
      });
    } else {
      this.setState(function(prevState) {
        return {
          dogLikes: prevState.dogLikes - 1
        }
      });
    }
  }

  handleShowWinnerButtonClick() {
    var catLikesCount = this.state.catLikes;
    var dogLikesCount = this.state.dogLikes;

    if (catLikesCount > dogLikesCount) {
      console.log('Cat is the Winner');
    } else if (catLikesCount < dogLikesCount) {
      console.log('Dog is the Winner');
    } else {
      console.log('Game is a TIE');
    }
  }

  handleStartOverButtonClick() {

  }

  render () {
    console.log(this.state);
    return (
      <div>
        <h1 style={style}>Welcome to Cat vs Dog Cuteness Battle</h1>
        <div style={{marginTop: 60, textAlign: 'center'}}>
          <Pet
            imageUrl="http://www.cutestpaw.com/wp-content/uploads/2011/11/HALP.jpeg"
            name="Cat"
            likesCount={this.state.catLikes}
            onLikeButtonClick={this.handleLikeButtonClick}
            onDislikeButtonClick={this.handleDislikeButtonClick}
          />
          {' '}
          <Pet
            imageUrl="https://s-media-cache-ak0.pinimg.com/736x/82/b5/42/82b542ced27fcefc0935373e7c7db113--dachshund-puppies-wiener-dogs.jpg"
            name="Dog"
            likesCount={this.state.dogLikes}
            onLikeButtonClick={this.handleLikeButtonClick}
            onDislikeButtonClick={this.handleDislikeButtonClick}
          />
        </div>
        <div style={{textAlign: 'center'}}>
          <button style={buttonStyle} onClick={this.handleShowWinnerButtonClick}>Show Winner</button>
          <button style={buttonStyle} onClick={this.handleStartOverButtonClick}>Start Over</button>
        </div>
      </div>
    );
  }
}

export default HomePage;
