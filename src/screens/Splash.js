import React, {Component} from 'react';
import {Text, View, StyleSheet, ImageBackground, Button} from 'react-native';
export default class Splash extends Component {

render() {
return (
<ImageBackground source={require('../src/components/background.png')} style={styles.container} >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.headerText}> Welcome to the SpaceX World!</Text>
        <Button
          color="#3C99DC"
          title="Discover Launches"
          onPress={() => this.props.navigation.navigate('Home')}
        /> 
      </View>
    </ImageBackground>
);
}}

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