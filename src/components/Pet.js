import React from 'react';

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

var Pet = function(props) {
  return (
    <div style={compStyle}>
      <h3>{props.name} Likes: {props.likesCount}</h3>
      <img
        src={props.imageUrl}
        alt={`Cute ${props.name}`}
        style={{height: 400, width: 400}}/>
      <br />
      <button style={buttonStyle} value={props.name} onClick={props.onLikeButtonClick}>Like</button>
      <button style={buttonStyle} value={props.name} onClick={props.onDislikeButtonClick}>Dislike</button>
    </div>
  );
}

export default Pet;
