import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function Launch({
  flightNumber,
  missionName,
  details,
  launchSite,
  launchSuccess,
  links,
  rocket,
  upcoming,
  styles,
  navigate,
}) {
  const launchData = {
    flightNumber,
    missionName,
    details,
    launchSite,
    launchSuccess,
    links,
    rocket,
    upcoming,
  };

  return (
    <TouchableOpacity
      style={styles.launchContainer}
      onPressIn={() => navigate('LaunchDetails', launchData)}
    >
      <Text style={styles.launchText}>{missionName}</Text>
      <Text style={styles.launchText}>{`Flight Number: ${flightNumber}`}</Text>
    </TouchableOpacity>
  );
}