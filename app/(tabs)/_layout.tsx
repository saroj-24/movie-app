import React from 'react';
import { Tabs } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { theme } from '@/constant/theme';

const focusedColor = '#FFFFFF';
const unfocusedColor = '#8B8B8B';

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: focusedColor,
        tabBarInactiveTintColor: unfocusedColor,
        tabBarStyle: {
          backgroundColor: '#1A1A2E',
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 0,
          paddingTop: 10,
          paddingHorizontal: 10,
          borderRadius: 35,
          marginHorizontal: 20,
          marginBottom: 50,
          position: 'absolute',
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 8,
        },
        tabBarLabelStyle: {
          fontSize: theme.fontSize.base || 12,
          fontFamily: theme.fonts.Noto_Regular || 'System',
          fontWeight: '500',
          marginTop: 1,
        },
        tabBarActiveBackgroundColor: '',
        tabBarInactiveBackgroundColor: 'transparent',
        tabBarItemStyle: {
          borderRadius: 900,
          marginHorizontal: 5,
          paddingVertical:5,
          marginBottom: 90,
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
              size={22}
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
              size={22}
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
              name={focused ? "favorite" : "favorite-border"}
              size={22}
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
              size={20}
              color={focused ? focusedColor : unfocusedColor}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;