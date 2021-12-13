import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import About from '../screens/About';
import Icon from './icon';
import TabBar from './tabbar';

const Router = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon name="home" color={tintColor} />,
      },
    },
    Setting: {
      screen: Setting,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon name="settings" color={tintColor} />,
      },
    },
    About: {
      screen: About,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon name="search" color={tintColor} />,
      },
    },
  },
  {
    tabBarComponent: TabBar,
    tabBarOptions: {
      activeTintColor: '#2FC7FF',
      inactiveTintColor: '#C5C5C5',
    },
  },
);

export default createAppContainer(Router);