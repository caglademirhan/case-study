import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
export default class Settings extends Component {
static navigationOptions = {
title : "Setting"
}
render() {
return (
<View style={styles.container}>
<Text style={{fontSize : 25, marginBottom : 20}}>SETTINGS SCREEN</Text></View>
);
}}
const styles = StyleSheet.create({
container: {
flex : 1,
justifyContent: 'center',
alignItems: 'center',
},
});