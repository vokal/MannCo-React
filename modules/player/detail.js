"use strict";

import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Player from "./services/player";

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
    return (
      <View style={ styles.container }>
        <Text>Player: { player.NAME }</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#48BBEC",
  }
} );

module.exports = PlayerDetail;
