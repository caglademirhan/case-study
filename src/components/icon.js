import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faCog,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

const icons = {
  home: faHome,
  search: faSearch,
  settings: faCog,
};

const Icon = ({name, color}) => {
  return (
    <FontAwesomeIcon icon={icons[name]} style={{color: color}} size={20} />
  );
};

export default Icon;