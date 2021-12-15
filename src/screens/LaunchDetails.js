import React from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import LaunchDetailsView from '../../components/LaunchDetailsView';

export default function LaunchDetails({ navigation }) {
  const {
    details,
    flightNumber,
    launchDateUnix,
    launchSuccess,
    links,
    missionName,
    rocket,
    launchSite,
    upcoming,
    staticFireDateUnix,
  } = navigation.state.params;

  console.log('params', navigation.state.params);

  const {
    wikipedia: wikipediaUrl,
    flickrImages,
    videoLink,
  } = links;


  return (
    <ScrollView style={styles.launchDetailsContainer}>
      <LaunchDetailsView
        flightNumber={flightNumber}
        successfulOrNotCall={successfulOrNotCall}
        missionName={missionName}
        launchSite={launchSite}
        details={details}
        flickrImages={flickrImages}
        randomFlickerImage={randomFlickerImage}
        videoLink={videoLink}
        wikipediaUrl={wikipediaUrl}
        wikipediaLogo={wikipediaLogo}
        rocket={rocket}
        navigation={navigation}
      />
    </ScrollView>
  );
}

export default StyleSheet.create({
  launchDetailsContainer: {
    flex: 1,
    marginLeft: screenWidth / 50,
    marginRight: screenWidth / 50,
    marginBottom: screenHeight / 50,
    marginTop: screenHeight / 75,
    borderRadius,
    borderColor: tertiaryColor,
    borderWidth: 1,
    backgroundColor: primaryColor,
  },
}); 
