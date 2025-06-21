import { StyleSheet } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { theme } from '@/constant/theme';

const focusedColor = '#483AA0';
const unfocusedColor = 'black';

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: focusedColor,
        tabBarInactiveTintColor: unfocusedColor,
        tabBarLabelStyle: {
          fontSize:theme.fontSize.base,       
          fontFamily:theme.fonts.Noto_Regular, 
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? focusedColor : unfocusedColor}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather
              name="search"
              size={24}
              color={focused ? focusedColor : unfocusedColor}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="favorite-border"
              size={24}
              color={focused ? focusedColor : unfocusedColor}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome6
              name="user"
              size={24}
              color={focused ? focusedColor : unfocusedColor}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
