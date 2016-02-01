"use strict";

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";

import playerIcon from "./filters/icon";
import flex from "../_app/styles/flex";
import styles from "./styles/slug";

class PlayerSlug extends Component {
  componentDidMount() {
    this.setState( { player: null } );
  }

  render() {
    var player = this.props.player;
    var icon = playerIcon( player, "150" );

    return (
      <View style={ [ flex.row, styles.container ]}>
        <Image
          source={ icon }
          style={ styles.thumbnail }
          />

        <View style={ [ flex.one, flex.center ] }>
          <Text style={ styles.playerName } numberOfLines={ 1 }>
            { player.NAME.toUpperCase() }
          </Text>
          <View style={ flex.row }>
            <Text style={ styles.playerKills }>{ player.KILLS } kills</Text>
            <Text style={ styles.playerKills }>{ player.kd } k/d</Text>
            <Text style={ styles.playerKills }>{ player.POINTS } points</Text>
          </View>
        </View>

        <View style={ [ flex.center, styles.position ] }>
          <Text style={ styles.positionText }>{ this.props.position }</Text>
        </View>
      </View>
    );
  }
};

module.exports = PlayerSlug;
