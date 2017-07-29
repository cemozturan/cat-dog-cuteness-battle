import React, { Component } from 'react';
import Pet from './Pet';
import axios from 'axios';

var buttonStyle = {
  height: '25px',
  marginTop: '30px',
  marginRight: '5px'
};

var API_KEY = "123456789";

var CAT_URL = "http://localhost:63000/cat/?api_key=" + API_KEY;
var DOG_URL = "http://localhost:63000/dog/?api_key=" + API_KEY;

class PetGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: {result: '', imageUrl: ''},
      dog:  {result: '', imageUrl: ''}
    }
    this.catLikes = 0;
    this.dogLikes = 0;
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

  componentDidMount(){
    this.fetchImages();
  }

  fetchCatImage() {
    axios.get(CAT_URL)
      .then(function(response) {
        var imageUrl = response.data.imageUrl;
        this.setState(function(prevState) {
          return {
            cat: {result: prevState.cat.result, imageUrl: imageUrl}
          };
        });
      }.bind(this));
  }

  fetchDogImage() {
    axios.get(DOG_URL)
      .then(function(response) {
        var imageUrl = response.data.imageUrl;
        this.setState(function(prevState) {
          return {
            dog: {result: prevState.dog.result, imageUrl: imageUrl}
          };
        });
      }.bind(this));
  }

  fetchImages() {
      this.fetchCatImage();
      this.fetchDogImage();
  }

  handleLikeButtonClick(event) {
    var petName = event.target.value;

    if (petName === 'Cat') {
      this.catLikes += 1;
    } else {
      this.dogLikes += 1;
    }
    this.fetchImages();
  }

  handleDislikeButtonClick(event) {
    var petName = event.target.value;

    if (petName === 'Cat') {
      this.catLikes -= 1;
    } else {
      this.dogLikes -= 1;
    }
    this.fetchImages();
  }

  handleShowWinnerButtonClick() {
    var catLikesCount = this.catLikes;
    var dogLikesCount = this.dogLikes;
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
          cat: {result: catResult, imageUrl: prevState.cat.imageUrl},
          dog: {result: dogResult, imageUrl: prevState.dog.imageUrl}
        }
    });
  }

  handleStartOverButtonClick() {
      this.setState({
            cat: {result: '', imageUrl: ''},
            dog: {result: '', imageUrl: ''}
          });
      this.catLikes = 0;
      this.dogLikes = 0;
      this.fetchImages();
  }

  render () {
    return (
      <div>
        <div style={{marginTop: 60, textAlign: 'center'}}>
          <Pet
            imageUrl={this.state.cat.imageUrl}
            name="Cat"
            result={this.state.cat.result}
            likesCount={this.catLikes}
            onLikeButtonClick={this.handleLikeButtonClick}
            onDislikeButtonClick={this.handleDislikeButtonClick}
          />
          {' '}
          <Pet
            imageUrl={this.state.dog.imageUrl}
            name="Dog"
            result={this.state.dog.result}
            likesCount={this.dogLikes}
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

export default PetGame;
