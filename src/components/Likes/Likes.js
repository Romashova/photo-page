import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./Likes.css";

class Likes extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      likes: parseInt(localStorage.getItem(`${this.props.imgSrc}`)) || 0,
      updated: false
    }
    this.updateLikes = this.updateLikes.bind(this);
  }

  updateLikes() {

    if (!this.state.updated) {
      this.setState((prevState) => {
        localStorage.setItem(`${this.props.imgSrc}`, (prevState.likes + 1).toString())
        return {
          likes: prevState.likes + 1,
          updated: true,
        };
      });
    } else {

      this.setState((prevState) => {
        localStorage.setItem(`${this.props.imgSrc}`, (prevState.likes - 1).toString())
        return {
          likes: prevState.likes - 1,
          updated: false
        };
      });
    }


  }

  render() {

    return (
      <div className='likes-wrapper'>
        <p onClick={this.updateLikes}>{this.state.likes===0?<FavoriteBorderIcon />:<FavoriteIcon/>}{this.state.likes}</p>

      </div>
    );

  }


}

export default Likes;
