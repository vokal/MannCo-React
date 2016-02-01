"use strict";

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";

import playerIcon from "./filters/icon";
import styles from "./styles/slug";

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
        <View style={ styles.detailContainer }>
          <Text style={ styles.playerName } numberOfLines={ 1 }>
            { player.NAME.toUpperCase() }
          </Text>
          <View style={ styles.playerDetails }>
            <Text style={ styles.playerKills }>{ player.KILLS } kills</Text>
            <Text style={ styles.playerKills }>{ player.kd } k/d</Text>
            <Text style={ styles.playerKills }>{ player.POINTS } points</Text>
          </View>
        </View>
        <View style={ styles.rightContainer }>
          <Text style={ styles.position }>{ this.props.position }</Text>
        </View>
      </View>
    );
  }
};

module.exports = PlayerSlug;
