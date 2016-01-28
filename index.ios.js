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

class MannCo extends Component {
  render() {
    return (
      <NavigatorIOS
        style={ styles.container }
        initialRoute={{
          title: "MannCo Leaderboard",
          component: LeaderBoard
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ad5d34"
  }
});

AppRegistry.registerComponent( "MannCo", () => MannCo );
