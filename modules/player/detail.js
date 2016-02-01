"use strict";

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";

import Player from "./services/player";
import playerIcon from "./filters/icon";

import flex from "../_app/styles/flex";
import styles from "./styles/detail";

class PlayerDetail extends Component {
  constructor() {
    super();
    this.state = {
      player: null,
      isLoaded: false
    };
  }
  componentDidMount() {
    Player.get( this.props.steamid )
      .then( player => {
        this.setState( {
          isLoaded: true,
          player: player
        } );
      } )
      .done();
  }

  render() {
    if( !this.state.isLoaded )
    {
      return (
        <View style={ flex.one }>
          <Text>Loading Player...</Text>
        </View>
      );
    }

    var player = this.state.player;
    var icon = playerIcon( player, "450" );
    return (
      <ScrollView style={ [ flex.one, styles.scroll ] }>
        <View style={ [ styles.card, flex.row ] }>
          <Image
            source={ icon }
            style={ styles.thumbnail }
            />
          <View style={ flex.one }>
            <Text style={ styles.text }>{ player.POINTS } points ({ player.ppm } p/m)</Text>
            <Text style={ styles.text }>{ player.KILLS } kills ({ player.kpm } k/m)</Text>
            <Text style={ styles.text }>{ player.Death } deaths</Text>
            <Text style={ styles.text }>{ player.kd } k/d</Text>
            <Text style={ styles.text }>{ player.KillAssist } assists</Text>
            <Text style={ styles.text }>{ player.PLAYTIME } minutes</Text>
          </View>
        </View>

      </ScrollView>
    );
  }
};

module.exports = PlayerDetail;
