const API_KEY = "a86730bf75dca6b383ebaefc1fe54347";


const requests = {
    fetchNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTrendingMovies: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
    fetchTopRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchUpcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTopRatedTVShows: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopularTVShows: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchAiringTodayTVShows: `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,

}

export default requests;