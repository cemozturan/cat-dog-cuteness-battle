import React, { Component } from 'react';
import Pet from './Pet';
import axios from 'axios';
import constants from '../constants';

var CAT = constants.CAT;
var DOG = constants.DOG;
var API_KEY = constants.API_KEY;
var WINNER = constants.WINNER;
var LOSER = constants.LOSER;
var TIE = constants.TIE;
var CAT_URL = "http://localhost:63000/cat/?api_key=" + API_KEY;
var DOG_URL = "http://localhost:63000/dog/?api_key=" + API_KEY;

var buttonStyle = {
  height: '25px',
  marginTop: '30px',
  marginRight: '5px'
};

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

  fetchPetImage(petUrl, petName) {
    petName = petName.toLowerCase();
    axios.get(petUrl)
      .then(function(response) {
        var imageUrl = response.data.imageUrl;
        this.setState(function(prevState) {
          var state = {};
          state[petName] = {
            result: prevState[petName].result,
            imageUrl: imageUrl
          }
          return state;
        });
      }.bind(this));
  }

  fetchImages() {
      this.fetchPetImage(CAT_URL, CAT);
      this.fetchPetImage(DOG_URL, DOG);
  }

  handleLikeDislikeButtonClicks(petName, value) {
    if (petName === CAT) {
      this.catLikes += value;
    } else {
      this.dogLikes += value;
    }
    this.fetchImages();
  }

  handleLikeButtonClick(event) {
    this.handleLikeDislikeButtonClicks(event.target.value, 1);
  }

  handleDislikeButtonClick(event) {
    this.handleLikeDislikeButtonClicks(event.target.value, -1);
  }

  handleShowWinnerButtonClick() {
    var catLikesCount = this.catLikes;
    var dogLikesCount = this.dogLikes;
    var catResult = TIE;
    var dogResult = TIE;

    if (catLikesCount > dogLikesCount) {
      catResult = WINNER;
      dogResult = LOSER;
    } else if (catLikesCount < dogLikesCount) {
      dogResult = WINNER;
      catResult = LOSER;
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
            name={CAT}
            result={this.state.cat.result}
            likesCount={this.catLikes}
            onLikeButtonClick={this.handleLikeButtonClick}
            onDislikeButtonClick={this.handleDislikeButtonClick}
          />
          {' '}
          <Pet
            imageUrl={this.state.dog.imageUrl}
            name={DOG}
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
