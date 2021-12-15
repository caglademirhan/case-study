import React from 'react';
import { Text, FlatList, ScrollView } from 'react-native';
import { useQuery } from '@apollo/react-hooks';

import Launch from '../../components/Launch';

import { allLaunches as allLaunchesQueries } from '../../queries/launches';

export default function DiscoverLaunches({ navigation }) {
  const { loading, error, data: queryData } = useQuery(allLaunchesQueries);

  if (loading)
    return (
      <>
        <Text>Loading...</Text>
      </>
    );

  if (error)
    return (
      <>
        <Text>Something went wrong </Text>
      </>
    );

  const flatListData = queryData.allLaunches.map(
    (
      {
        flightNumber,
        missionName,
        details,
        launchSite,
        launchSuccess,
        links,
        rocket,
        upcoming,
      },
      index,
    ) => ({
      flightNumber,
      missionName,
      details,
      launchSite,
      launchSuccess,
      links,
      rocket,
      upcoming,
      key: String(index),
    }),
  );

  const launchStyles = {
    launchContainer: styles.launchContainer,
    launchText: styles.launchText,
  };

  const renderItem = ({ item }) => (
    <Launch
      flightNumber={item.flightNumber}
      missionName={item.missionName}
      details={item.details}
      launchSite={item.launchSite}
      launchSuccess={item.launchSuccess}
      launchYear={item.launchYear}
      links={item.links}
      rocket={item.rocket}
      upcoming={item.upcoming}
      navigate={navigation.navigate}
      styles={launchStyles}
    />
  );

  return (
    <ScrollView>
      <FlatList data={flatListData} renderItem={renderItem} />
    </ScrollView>
  );
}

export default StyleSheet.create({
 
  launchContainer: {
    margin: screenHeight / 100,
    backgroundColor: primaryColor,
    borderColor: tertiaryColor,
    borderWidth: 1,
    borderRadius,
    padding: screenWidth / 50,
  },
  launchText: {
    color: secondaryColor,
    fontSize: mediumFontSize,
    fontWeight: '500',
  },
  
});