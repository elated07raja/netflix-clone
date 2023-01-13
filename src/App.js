import React from 'react';
import './App.css';
import Row from './Row.js';
import requests from './requests';
import Banner from './Banner.js';
import Nav from './Nav.js';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />

      <Row 
        title="Now Playing" 
        fetchUrl={requests.fetchNowPlaying} 
        isLargeRow
      />
      <Row title="Trending Movies" fetchUrl={requests.fetchTrendingMovies} />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Upcoming Movies" fetchUrl={requests.fetchUpcomingMovies} />
      <Row title="Top Rated TV Shows" fetchUrl={requests.fetchTopRatedTVShows} />
      <Row title="Popular TV Shows" fetchUrl={requests.fetchPopularTVShows} />
      <Row title="Airing Today TV Shows" fetchUrl={requests.fetchAiringTodayTVShows} />
    </div>
  );
}

export default App;
