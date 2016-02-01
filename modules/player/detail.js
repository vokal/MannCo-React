"use strict";

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

import Player from "./services/player";
import playerIcon from "./filters/icon.js";

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
        <View style={ styles.container }>
          <Text>Loading Player...</Text>
        </View>
      );
    }

    var player = this.state.player;
    var icon = playerIcon( player, "300" );
    return (
      <View style={ styles.container }>
        <View style={ styles.card }>
          <Image
            source={ icon }
            style={ styles.thumbnail }
            />
          <Text style={ styles.text }>Points: { player.POINTS }</Text>
          <Text style={ styles.text }>Kills: { player.KILLS }</Text>
          <Text style={ styles.text }>Deaths: { player.Death }</Text>
          <Text style={ styles.text }>K/D: { player.kd }</Text>
          <Text style={ styles.text }>Assists: { player.KillAssist }</Text>
          <Text style={ styles.text }>Time Played: { player.PLAYTIME } minutes</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    paddingTop: 65,
    backgroundColor: "#f9f7f2",
  },
  card: {
    margin: 6,
    padding: 8,
    backgroundColor: "#ffffff"
  },
  thumbnail: {
    height: 150,
    width: 150,
  },
  text: {
    marginTop: 6,
  },
} );

module.exports = PlayerDetail;
