import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {
  renderMovies(movieData){
    console.log("movieData: ",movieData);
    const title = movieData.Title;
    const director = movieData.Director;
    const released = movieData.Released;
    const plot = movieData.Plot;
    const poster = movieData.Poster;

//    const temps = movieData.list.map(weather => weather.main.temp)
  //  console.log(temps);

      return (
        <tr key={title}>
          <td>{title}</td>
          <td>{director}</td>
          <td>{released}</td>
          <td>{plot}</td>
          <td><img src={poster} /></td>
        </tr>
      )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Released</th>
            <th>Plot</th>
            <th>Poster</th>
          </tr>
        </thead>
        <tbody>
          {this.props.movie.map(this.renderMovies)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ movie }){

  return { movie }; // ES6 version of below

  // return { weather : state.weather };
}

export default connect(mapStateToProps)(MovieList);
