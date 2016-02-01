"use strict";

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  RefreshControl,
  TouchableHighlight
} from "react-native";

import Player from "../player/services/player";
import PlayerSlug from "../player/listSlug";
import PlayerDetail from "../player/detail";
import styles from "./styles/leaderboard";

class LeaderBoard extends Component {
  constructor() {
    super();
    this.state = {
      isRefreshing: false,
      isLoaded: false,
      sortBy: "POINTS",
      dataSource: new ListView.DataSource( {
        rowHasChanged: ( row1, row2 ) => row1 !== row2
      } ),
    };
  }
  componentDidMount() {
    Player.getAll()
      .then( list => {
        list.sort( ( a, b ) => b[ this.state.sortBy ] - a[ this.state.sortBy ] );
        this.setState( {
          dataSource: this.state.dataSource.cloneWithRows( list ),
          isLoaded: true,
          sortBy: "KILLS"
        } );
      } )
      .done();
  }

  _onRefresh() {
    this.setState( { isRefreshing: true } );
    Player.getAll()
      .then( list => {
        list.sort( ( a, b ) => b[ this.state.sortBy ] - a[ this.state.sortBy ] );
        this.setState( {
          dataSource: this.state.dataSource.cloneWithRows( list ),
          isRefreshing: false,
          sortBy: this.state.sortBy === "POINTS" ? "KILLS" : "POINTS"
        } );
      } )
      .done();
  }
  _onPlayerTap( player ) {
    this.props.navigator.push( {
      component: PlayerDetail,
      title: player.NAME.toUpperCase(),
      passProps: {
        steamid: player.STEAMID
      }
    } );
  }

  render() {
    if( !this.state.isLoaded )
    {
      return this.renderLoadingView();
    }

    return (
      <ScrollView
        style={ styles.scrollView }
        refreshControl={
          <RefreshControl
            refreshing={ this.state.isRefreshing }
            onRefresh={ () => this._onRefresh() }
            tintColor="#222222"
            title="Loading..."
            colors={ [ "#222222" ] }
            progressBackgroundColor="#ffff00"
          />
        }>
        <ListView
          dataSource={ this.state.dataSource }
          renderRow={ this.renderPlayer.bind( this ) }
          style={ styles.listView }
          />
      </ScrollView>
    );
  }
  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the MannCo Reports!
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{"\n"}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
  renderPlayer( player, sectionID, rowID ) {
    var position = Number( rowID ) + 1;

    return (
      <View style={ styles.rowWrapper }>
        <TouchableHighlight onPress={ () => this._onPlayerTap( player ) }>
          <View>
            <PlayerSlug player={ player } position={ position }></PlayerSlug>
          </View>
        </TouchableHighlight>
      </View> );
  }
};

module.exports = LeaderBoard;
