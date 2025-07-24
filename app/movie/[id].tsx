import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { icons } from "@/constant/icons";
import useFetch from "@/service/useFetch";
import { fetchMovieDetails } from "@/service/api";
import React from "react";


const { width } = Dimensions.get('window');

interface MovieInfoProps {
  label: string;
  value?: string | number | null;
}

const MovieInfo = ({ label, value }: MovieInfoProps) => (
  <View className="flex-col items-start justify-center mt-4">
    <Text className="text-gray-400 font-normal text-sm">{label}</Text>
    <Text className="text-black font-medium text-sm mt-1">
      {value || "N/A"}
    </Text>
  </View>
);

const Details = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const { data: movie, loading, error } = useFetch(() =>
    fetchMovieDetails(id as string)
  );

  if (loading) {
    return (
      <SafeAreaView className="bg-black flex-1">
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#0000ff" />
          <Text className="text-white mt-4">Loading movie details...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView className="bg-black flex-1">
        <View className="flex-1 justify-center items-center px-4">
          <Text className="text-red-500 text-center text-lg font-bold mb-2">
            Error Loading Movie Details
          </Text>
          <Text className="text-red-400 text-center mb-4">
            {error.message}
          </Text>
          <TouchableOpacity
            onPress={router.back}
            className="bg-accent rounded-lg px-6 py-3"
          >
            <Text className="text-white font-semibold">Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  if (!movie) {
    return (
      <SafeAreaView className="bg-black flex-1">
        <View className="flex-1 justify-center items-center">
          <Text className="text-white text-center">Movie not found</Text>
          <TouchableOpacity
            onPress={router.canGoBack}
            className="bg-accent rounded-lg px-6 py-3 mt-4"
          >
            <Text className="text-white font-semibold">Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View className="bg-black flex-1">
      <ScrollView 
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section with Poster */}
        <View className="relative">
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
            style={{ width: width, height: width * 1.4 }}
            resizeMode="cover"
          />
          
          {/* Gradient Overlay */}
          <View className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
          
        </View>

        {/* Movie Info Section */}
        <View className="px-5 pt-8">
          {/* Title */}
          <Text className="text-black font-bold text-2xl leading-9">
            {movie?.title}
          </Text>
          
          {/* Year, Rating, Duration */}
          <View className="flex-row items-center mt-2">
            <Text className="text-gray-400 text-sm">
              {movie?.release_date?.split("-")[0]}
            </Text>
            <Text className="text-gray-400 text-sm mx-2">•</Text>
            <Text className="text-gray-400 text-sm">PG-13</Text>
            <Text className="text-gray-400 text-sm mx-2">•</Text>
            <Text className="text-gray-400 text-sm">{movie?.runtime}m</Text>
          </View>

          {/* Rating Section */}
          <View className="flex-row items-center mt-3">
            <View className="flex-row items-center bg-gray-800 px-3 py-1.5 rounded-md">
              <Image source={icons.star} className="w-4 h-4" />
              <Text className="text-orange-400 font-bold text-sm ml-1">
                {movie?.vote_average?.toFixed(1)}
              </Text>
              <Text className="text-black text-sm">/10</Text>
              <Text className="text-gray-400 text-xs ml-1">
                ({movie?.vote_count ? `${Math.floor(movie.vote_count / 1000)}K` : '0'})
              </Text>
            </View>
            <View className="flex-row items-center ml-4">
              <Text className="text-green-400 text-sm">↗</Text>
              <Text className="text-black text-sm ml-1">1</Text>
            </View>
          </View>

          {/* Overview */}
          <MovieInfo label="Overview" value={movie?.overview} />

          {/* Release Date and Status in Row */}
          <View className="flex-row justify-between mt-6">
            <View className="flex-1 mr-4">
              <Text className="text-gray-400 font-normal text-sm">Release date</Text>
              <Text className="text-black font-medium text-sm mt-1">
                {movie?.release_date ? 
                  new Date(movie.release_date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  }) + ' (Worldwide)' 
                  : 'N/A'
                }
              </Text>
            </View>
            <View className="flex-1">
              <Text className="text-gray-400 font-normal text-sm">Status</Text>
              <Text className="text-black font-medium text-sm mt-1">Released</Text>
            </View>
          </View>

          {/* Genres */}
          <View className="mt-4">
            <Text className="text-gray-400 font-normal text-sm">Genres</Text>
            <View className="flex-row flex-wrap mt-2">
              {movie?.genres?.slice(0, 3).map((genre, index) => (
                <View key={genre.id} className="bg-gray-800 px-3 py-1.5 rounded-md mr-2 mb-2">
                  <Text className="text-black text-sm">{genre.name}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Countries */}
          <View className="mt-4">
            <Text className="text-gray-400 font-normal text-sm">Countries</Text>
            <Text className="text-black font-medium text-sm mt-1">
              {movie?.production_countries?.map(country => country.name).join(' • ') || 'N/A'}
            </Text>
          </View>

          {/* Budget and Revenue */}
          <View className="flex-row justify-between mt-6">
            <View className="flex-1 mr-4">
              <Text className="text-gray-400 font-normal text-sm">Budget</Text>
              <Text className="text-black font-medium text-sm mt-1">
                ${movie?.budget ? `${(movie.budget / 1_000_000).toFixed(1)} million` : 'N/A'}
              </Text>
            </View>
            <View className="flex-1">
              <Text className="text-gray-400 font-normal text-sm">Revenue</Text>
              <Text className="text-black font-medium text-sm mt-1">
                ${movie?.revenue ? `${Math.round(movie.revenue / 1_000_000)} Million` : 'N/A'}
              </Text>
            </View>
          </View>

          {/* Tagline */}
          {movie?.tagline && (
            <View className="mt-4">
              <Text className="text-gray-400 font-normal text-sm">Tagline</Text>
              <Text className="text-black font-medium text-sm mt-1">{movie.tagline}</Text>
            </View>
          )}

          {/* Production Companies */}
          <View className="mt-4">
            <Text className="text-gray-400 font-normal text-sm">Production Companies</Text>
            <Text className="text-black font-medium text-sm mt-1">
              {movie?.production_companies?.map((c) => c.name).join(' • ') || 'N/A'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;