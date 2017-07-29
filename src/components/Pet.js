import React from 'react';
import constants from '../constants';

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

var LOSER = constants.LOSER;
var CUTE = constants.CUTE;

var Pet = function(props) {
  var result = null;
  var disabled = false;
  if (props.result !== '') {
    var resultStyle = {};
    if (props.result === LOSER) {
        resultStyle = { color: 'red' };
    } else {
        resultStyle = { color: 'green' };
    }
    result = <h1 style={resultStyle}>{props.result}</h1>;
    disabled = true;
  }

  return (
    <div style={compStyle}>
    {result}
    {
        (props.result) ? (
            <h3>{props.name} Likes: {props.likesCount}</h3>
        )  : (
            <h3>{props.name}</h3>
        )
    }
      <img
        src={props.imageUrl}
        alt={CUTE + ' ' + props.name}
        style={{height: 300, width: 300}}/>
      <br />
      <button style={buttonStyle} disabled={disabled} value={props.name} onClick={props.onLikeButtonClick}>Like</button>
      <button style={buttonStyle} disabled={disabled} value={props.name} onClick={props.onDislikeButtonClick}>Dislike</button>
    </div>
  );
}

export default Pet;
