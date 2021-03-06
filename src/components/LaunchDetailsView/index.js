import React from 'react';
import { View, Text } from 'react-native';

import FlickrImage from './FlickrImage';
import YouTubeWebView from './YouTubeWebView';
import LinkLogos from '../LinkLogos';
import LaunchRocket from '../LaunchRocket';
import styles from './styles';


export default function LaunchDetailsView({
  flightNumber,
  successfulOrNotCall,
  missionName,
  launchSite,
  details,
  flickrImages,
  randomFlickerImage,
  videoLink,
  wikipediaUrl,
  wikipediaLogo,
  rocket,
  navigation,
}) {
  const flickrImageStyles = {
    flickerImageContainer: styles.flickerImageContainer,
    flickerImage: styles.flickerImage,
  };

  const youTubeVideoStyles = {
    youtubeVideoContainer: styles.youtubeVideoContainer,
    youtubeVideo: styles.youtubeVideo,
  };

  const linkLogoStyles = {
    linkLogosContainer: styles.linkLogosContainer,
    linkLogoContainer: styles.linkLogoContainer,
    linkLogo: styles.linkLogo,
  };

  return (
    <View>
      <Text style={styles.title}>{`Flight number: ${flightNumber}`}</Text>
      <Text style={styles.launchDetailsText}>
        {`${successfulOrNotCall} ${convertedLaunchDateUnix}`}
      </Text>
      <Text style={styles.launchDetailsText}>
        {`Mission name: ${missionName}`}
      </Text>
      <Text style={styles.launchDetailsText}>
        {`Launch site: ${launchSite.siteNameLong}`}
      </Text>
      <Text style={styles.launchDetailsText}>
        {details === null ? 'No details yet!' : details}
      </Text>
      {flickrImages.length < 1 ? (
        <></>
      ) : (
        <FlickrImage
          styles={flickrImageStyles}
          randomFlickerImage={randomFlickerImage}
        />
      )}

      <LaunchRocket
        styles={{
          launchDetailsText: styles.launchDetailsText,
          title: styles.title,
          rocketNameContainer: styles.rocketNameContainer,
          rocketName: styles.rocketName,
        }}
        rocket={rocket}
        navigation={navigation}
      />

      {videoLink === null ? (
        <></>
      ) : (
        <YouTubeWebView styles={youTubeVideoStyles} videoLink={videoLink} />
      )}

      <LinkLogos
        styles={linkLogoStyles}
        wikipediaUrl={wikipediaUrl}
        wikipediaLogo={wikipediaLogo}
      />
    </View>
  );
}