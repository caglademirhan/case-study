import * as React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('./components/background.png')} style={styles.container} >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.headerText}> Welcome to the SpaceX World!</Text>
        <Button
          color="#3C99DC"
          title="Discover Launches"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </ImageBackground>
  );
}
function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    width: null,
    height: null,
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    color: "black",
    fontWeight: "bold"
  }
});

export default App;