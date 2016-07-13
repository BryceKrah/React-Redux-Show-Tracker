import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {
  renderMovies(movieData){
    console.log("movieData: ",movieData);
    if (movieData.Response === "True"){
      const movieArray = []
      const myList = movieData.Search.map((mov) => {
        movieArray.push(
          <div className="ml-item" key={mov.imdbID}>
          <div>{mov.Title}</div>
          <div>{mov.Year}</div>
          <div><img src={mov.Poster}/></div>
          </div>
        )
      })
      return movieArray;
    } else {
      return (
        <div className="error" key={movieData.Error}>Sorry Movie Not Found!</div>
      )
    }


  }

  render() {
    return (
      <div className="movie-list-container">
          {this.props.movie.map(this.renderMovies)}
      </div>
    )
  }
}

function mapStateToProps({ movie }){

  return { movie }; // ES6 version of below

  // return { weather : state.weather };
}

export default connect(mapStateToProps)(MovieList);
