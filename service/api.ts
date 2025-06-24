
export const TMDB_CONFIG ={
    BASE_URL : 'https://api.themoviedb.org/3',
    API_KEY : process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers:{
        accept:'application/json',
        Authorization:`Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchMovies  = async({query}:{query:string})=>{
    const endpoint = query ? `${TMDB_CONFIG.BASE_URL}search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}discover/movie?sort_by=popularity.desc`;
    const response = await fetch(endpoint,{
        method:'GET',
        headers : TMDB_CONFIG.headers
    });
    if(!response.ok){
        //@ts-ignore
        throw new Error('failed to fetch the movie',response.statusText);
    }
    const data = await response.json();
    return data.results;

}
const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDM0ZjBmYzIxZTVmNGM2OGVkYjk2NWRmMzU2NGJjOSIsIm5iZiI6MTc1MDY5NjU0OC41NTcsInN1YiI6IjY4NTk4MjY0OGFhMzExZDMyZjk5NjY3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aunCQdcv8rcZPGBOCn_tBeNvqUZSpEpLH_8lTvCi6zo'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));