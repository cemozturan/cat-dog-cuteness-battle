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
      cat: {likes: 0, result: ''},
      dog:  {likes: 0, result: ''}
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
          cat: {likes: prevState.cat.likes + 1, result: prevState.cat.result}
        }
      });
    } else {
      this.setState(function(prevState) {
        return {
          dog: {likes: prevState.dog.likes + 1, result: prevState.dog.result}
        }
      });
    }
  }

  handleDislikeButtonClick(event) {
    var petName = event.target.value;

    if (petName === 'Cat') {
      this.setState(function(prevState) {
        return {
          cat: {likes: prevState.cat.likes - 1, result: prevState.cat.result}
        }
      });
    } else {
      this.setState(function(prevState) {
        return {
          dog: {likes: prevState.dog.likes - 1, result: prevState.dog.result}
        }
      });
    }
  }

  handleShowWinnerButtonClick() {
    var catLikesCount = this.state.cat.likes;
    var dogLikesCount = this.state.dog.likes;
    var catResult = 'TIE';
    var dogResult = 'TIE';

    if (catLikesCount > dogLikesCount) {
      catResult = 'Winner';
      dogResult = 'Loser';
    } else if (catLikesCount < dogLikesCount) {
      dogResult = 'Winner';
      catResult = 'Loser';
    }

    this.setState(function(prevState) {
        return {
          cat: {likes: prevState.cat.likes, result: catResult},
          dog: {likes: prevState.dog.likes, result: dogResult}
        }
    });

  }

  handleStartOverButtonClick() {
      this.setState({
            cat: {likes: 0, result: ''},
            dog: {likes: 0, result: ''}
          });
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
            result={this.state.cat.result}
            likesCount={this.state.cat.likes}
            onLikeButtonClick={this.handleLikeButtonClick}
            onDislikeButtonClick={this.handleDislikeButtonClick}
          />
          {' '}
          <Pet
            imageUrl="https://s-media-cache-ak0.pinimg.com/736x/82/b5/42/82b542ced27fcefc0935373e7c7db113--dachshund-puppies-wiener-dogs.jpg"
            name="Dog"
            result={this.state.dog.result}
            likesCount={this.state.dog.likes}
            onLikeButtonClick={this.handleLikeButtonClick}
            onDislikeButtonClick={this.handleDislikeButtonClick}
          />
        </div>
        <div style={{textAlign: 'center'}}>
            {
                !this.state.cat.result &&
                <button style={buttonStyle} onClick={this.handleShowWinnerButtonClick}>Show Winner</button>
            }
          <button style={buttonStyle} onClick={this.handleStartOverButtonClick}>Start Over</button>
        </div>
      </div>
    );
  }
}

export default HomePage;
