import SearchBar from "@/components/search-bar";
import { theme } from "@/constant/theme";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View,StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
      <Text style={styles.title}>Movie</Text>
      <View>
        <SearchBar onPress={()=>router.push("/search")}  placeholder="Search Movie" />
      </View>
    </View>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
  },
  title: {
    marginTop: 22,
    paddingVertical: 8,
    textAlign: 'center',
    fontFamily: theme.fonts.Noto_Bold,
    fontSize:theme.fontSize.xxlarge,
  },
});