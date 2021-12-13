import React from 'react';
import {TouchableOpacity} from 'react-native';
// react-navigation
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
// importing screens
import Home from './src/screens/Home';
import Setting from './src/screens/Setting';
import About from './src/screens/About';
import Splash from './src/screens/Splash';

const HomeNavigator = createStackNavigator(
{
'Home': {screen: Home,
navigationOptions: ({navigation}) => ({
headerLeft: () => (
<TouchableOpacity
style={{marginLeft: 20}}
onPress={() => navigation.toggleDrawer()}>
<Icon name="indent" size={25} /></TouchableOpacity>
)})
},
'About': {screen: About}
});

const SettingNavigator = createStackNavigator(
{
'Setting': {screen: Setting}
},{
defaultNavigationOptions: ({navigation}) => ({
headerLeft: () => (
<TouchableOpacity
style={{marginLeft: 20}}
onPress={() => navigation.toggleDrawer()}>
<Icon name="indent" size={25} />
</TouchableOpacity>
),
}),
});

const DrawerNavigator = createDrawerNavigator({
Home: {
navigationOptions: {
drawerLabel: 'Home', 
},
screen: HomeNavigator,
},
Setting: {
navigationOptions: {
drawerLabel: 'Setting', 
},
screen: SettingNavigator,
}});

const AppSwitchNavigator = createSwitchNavigator({
'Splash' : {screen : Splash},
'Drawer' : {screen : DrawerNavigator}
},
{
initialRouteName : 'Splash' 
})
const App = createAppContainer(AppSwitchNavigator);
export default App;