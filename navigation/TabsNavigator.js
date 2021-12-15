import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator'
import DiscoverLaunches from '../src/screens/DiscoverLaunches';
import LaunchDetails from '../src/screens/LaunchDetails';


const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tabs.Navigator >
      <Tabs.Screen name="DiscoverLaunches" component={DiscoverLaunches} />
      <Tabs.Screen name="LaunchDetails" component={LaunchDetails} />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;
