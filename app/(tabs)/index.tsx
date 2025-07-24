import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import useFetch from "@/service/useFetch";
import { fetchMovies, testAPIConnection } from "@/service/api";
import { getTrendingMovies } from "@/service/appwrites";
import SearchBar from "@/components/search-bar";
import MovieCard from "@/components/movieCard";
import TrendingCard from "@/components/TrendingCard";
import React, { useEffect } from "react";

const Index = () => {
  const router = useRouter();

  // Test API connection on component mount
  useEffect(() => {
    testAPIConnection();
  }, []);

  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
    refetch: refetchTrending
  } = useFetch(getTrendingMovies);

  const {
    data: movies,
    loading: moviesLoading,    error: moviesError,
    refetch: refetchMovies
  } = useFetch(() => fetchMovies({ query: "" }));

  // Debug logging
  console.log('=== DEBUG INFO ===');
  console.log('API Key exists:', !!process.env.EXPO_PUBLIC_MOVIE_API_KEY);
  console.log('Trending Movies:', trendingMovies);
  console.log('Movies:', movies);
  console.log('Trending Error:', trendingError?.message);
  console.log('Movies Error:', moviesError?.message);

  const handleRetry = () => {
    refetchMovies();
    refetchTrending();
  };

  // Function to ensure unique keys
  const generateUniqueKey = (item: any, index: number, prefix: string) => {
    return `${prefix}_${item?.id || item?.movie_id || index}_${Date.now()}`;
  };

  // Remove duplicates from arrays
  const removeDuplicates = (array: any[], keyField: string) => {
    if (!Array.isArray(array)) return [];
    
    const seen = new Set();
    return array.filter(item => {
      const key = item[keyField];
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  };

  // Process data to remove duplicates
  const processedTrendingMovies = trendingMovies ? 
    removeDuplicates(trendingMovies, 'movie_id') : [];
  
  const processedMovies = movies ? 
    removeDuplicates(movies, 'id') : [];

  return (
    <View className="flex-1 bg-primary mt-80">
      <View
        className="bg-neutral-50"
        
      />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        {moviesLoading || trendingLoading ? (
          <View className="mt-80 items-center ">
            <ActivityIndicator size="large" color="#0000ff" />
            <Text className="text-white mt-2">Loading movies...</Text>
          </View>
        ) : moviesError || trendingError ? (
          <View className="mt-10 px-4">
            <Text className="text-red-500 text-center text-lg font-bold mb-2">
              Error Loading Data
            </Text>
            <Text className="text-red-400 text-center mb-4">
              {moviesError?.message || trendingError?.message}
            </Text>
            
            <TouchableOpacity 
              onPress={handleRetry}
              className="bg-blue-600 px-4 py-2 rounded-lg mx-auto"
            >
              <Text className="text-white text-center font-bold">
                Retry
              </Text>
            </TouchableOpacity>
            
            <Text className="text-gray-400 text-center mt-4 text-sm">
              Please check your internet connection and API key
            </Text>
          </View>
        ) : (
          <View className="flex-1 mt-90">
        
            {processedTrendingMovies.length > 0 && (
              <View className="mt-10">
                <Text className="text-xl text-gray-950 font-bold mb-99">
                  Trending Movies
                </Text>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  className="mb-4 mt-6"
                  data={processedTrendingMovies}
                  contentContainerStyle={{
                    gap: 26,
                  }}
                  renderItem={({ item, index }) => (
                    <TrendingCard movie={item} index={index} />
                  )}
                  keyExtractor={(item, index) => 
                    generateUniqueKey(item, index, 'trending')
                  }
                  ItemSeparatorComponent={() => <View className="w-4" />}
                />
              </View>
            )}

            {/* Latest Movies Section */}
            {processedMovies.length > 0 ? (
              <>
                <Text className="text-lg text-black font-bold mt-5 mb-8">
                  Latest Movies ({processedMovies.length} found)
                </Text>

                <FlatList
                  data={processedMovies}
                  renderItem={({ item, index }) => (
                    <MovieCard {...item} key={generateUniqueKey(item, index, 'movie')} />
                  )}
                  keyExtractor={(item, index) => 
                    generateUniqueKey(item, index, 'movie')
                  }
                  numColumns={3}
                  columnWrapperStyle={{
                    justifyContent: "flex-start",
                    gap: 20,
                    paddingRight: 5,
                    marginBottom: 10,
                  }}
                  className="mt-2 pb-32"
                  scrollEnabled={false}
                />
              </>
            ) : !moviesLoading && !moviesError && (
              <Text className="text-white text-center mt-10">
                No movies available
              </Text>
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Index;