"use strict";

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS,
  Text,
  View
} from "react-native";
import LeaderBoard from "./modules/leaderboard/leaderboard";
import styles from "./modules/_app/styles/navigator";

class MannCo extends Component {
  render() {
    return (
      <NavigatorIOS
        style={ styles.nav }
        itemWrapperStyle={ styles.wrapper }
        initialRoute={{
          title: "Leaderboard",
          component: LeaderBoard
        }}/>
    );
  }
}

AppRegistry.registerComponent( "MannCo", () => MannCo );
