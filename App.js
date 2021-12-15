import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ApolloApp from './src/ApolloApp';

import TabsNavigator from './navigation/TabsNavigator';


const App = () => {
  return (
    <ApolloApp>
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
    </ApolloApp>
  );
};

export default App;