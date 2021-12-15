import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DiscoverLaunches from '../src/screens/DiscoverLaunches';
import LaunchDetails from '../src/screens/LaunchDetails';
import Splash from '../src/screens/Splash';


const Stack = createStackNavigator();

const StackNavigator = () => {

    return (
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="DiscoverLaunches" component={DiscoverLaunches} />
            <Stack.Screen name="LaunchDetails" component={LaunchDetails} />
        </Stack.Navigator>
    );
};


export default StackNavigator;