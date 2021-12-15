import gql from 'graphql-tag';


const Rocket = `
  rocketId
  rocketName
  rocketType
  firstStage {
    ${FirstStage}
  }
`;

const LaunchSite = `
  siteId
  siteName
`;

const Links = `
  missionPatch
  articleLink
  wikipedia
  videoLink
  flickrImages
`;

const AllLaunches = `
  flightNumber
  missionName
  upcoming
  launchYear
  isTentative
  tentativeMaxPrecision
  tbd
  missionId
  launchWindow
  ships
  launchSuccess
  details
  upcoming
  rocket {
    ${Rocket}
  }
  launchSite {
    ${LaunchSite}
  }
  links {
    ${Links}
  }
`;

export const allLaunches = gql`
  {
    allLaunches {
      ${AllLaunches}
    }
  }
`;