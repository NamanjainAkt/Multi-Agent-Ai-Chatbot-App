import { Tabs } from 'expo-router';
import React from 'react';
import { Home, Compass, History, User } from 'lucide-react-native';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#a855f7',
                tabBarInactiveTintColor: '#ffffff',
                tabBarStyle: {
                    backgroundColor: '#000000',
                },
            }}
        >
            <Tabs.Screen
                name="Home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name="Explore"
                options={{
                    title: 'Explore',
                    tabBarIcon: ({ color, size }) => <Compass size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name="History"
                options={{
                    title: 'History',
                    tabBarIcon: ({ color, size }) => <History size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name="Profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
                }}
            />
        </Tabs>
    );
}