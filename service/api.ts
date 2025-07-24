// api.ts - Fixed version
export const TMDB_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  // Use Bearer token authentication (recommended by TMDB)
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
  }
}

export const fetchMovies = async ({ query }: { query: string }) => {
  try {
    // Check if API key exists
    if (!TMDB_CONFIG.API_KEY) {
      throw new Error('TMDB API key is not configured. Please check your environment variables.');
    }

    // Fix the URL construction - add missing forward slash
    const endpoint = query 
      ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
      : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;
    
    console.log('Fetching from endpoint:', endpoint);
    
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: TMDB_CONFIG.headers
    });

    console.log('Response status:', response.status);
    console.log('Response ok:', response.ok);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error(`Failed to fetch movies: ${response.status} ${response.statusText}`);
    }

    // Check if response has content
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const responseText = await response.text();
      console.error('Non-JSON response:', responseText);
      throw new Error('Server returned non-JSON response');
    }

    const data = await response.json();
    console.log('API Response:', data);
    
    return data.results || [];
  } catch (error) {
    console.error('fetchMovies error:', error);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId: string): Promise<any> => {
  try {
    if (!TMDB_CONFIG.API_KEY) {
      throw new Error('TMDB API key is not configured');
    }

    // Use Bearer token instead of API key in URL for consistency
    const response = await fetch(
      `${TMDB_CONFIG.BASE_URL}/movie/${movieId}`,
      {
        method: "GET",
        headers: TMDB_CONFIG.headers,
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Movie details error response:', errorText);
      throw new Error(`Failed to fetch movie details: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

// Test function to verify API connection
export const testAPIConnection = async () => {
  try {
    const response = await fetch(`${TMDB_CONFIG.BASE_URL}/movie/popular`, {
      method: 'GET',
      headers: TMDB_CONFIG.headers
    });
    
    console.log('Test API Response Status:', response.status);
    
    if (response.ok) {
      const data = await response.json();
      console.log('API Connection successful:', data.results?.length, 'movies found');
      return true;
    } else {
      const errorText = await response.text();
      console.error('API Connection failed:', errorText);
      return false;
    }
  } catch (error) {
    console.error('API Connection error:', error);
    return false;
  }
};