"use strict";

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";

import playerIcon from "./filters/icon.js";

class PlayerSlug extends Component {
  componentDidMount() {
    this.setState( { player: null } );
  }

  render() {
    var player = this.props.player;
    var icon = playerIcon( player, "150" );

    return (
      <View style={ styles.container }>
        <Image
          source={ icon }
          style={ styles.thumbnail }
          />
        <View style={ styles.rightContainer }>
          <Text style={ styles.playerName }>{ player.NAME.toUpperCase() }</Text>
          <Text style={ styles.playerKills }>
            Points: { player.POINTS } - Kills: { player.KILLS }
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  thumbnail: {
    width: 75,
    height: 75
  },
  rightContainer: {
    flex: 1
  },
  playerName: {
    fontSize: 20,
    textAlign: "left",
    color: "#333333",
    paddingLeft: 15
  },
  playerKills: {
    textAlign: "left",
    color: "#888888",
    paddingLeft: 25
  }
});

module.exports = PlayerSlug;
