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
import SortToggle from "./sortToggle";
import styles from "./styles/leaderboard";

class LeaderBoard extends Component {
  constructor() {
    super();
    this.state = {
      sortBy: "POINTS",
      descending: true,
      dataSource: new ListView.DataSource( {
        rowHasChanged: ( row1, row2 ) => row1 !== row2
      } ),
    };
  }

  componentDidMount() {
    this.setPlayerList()
      .then( () => this.setState( { isLoaded: true } ) )
      .done();
  }

  setPlayerList() {
    return Player.getAll()
      .then( ( list ) => {
        list.sort( ( a, b ) => {
          return this.state.descending ?
            b[ this.state.sortBy ] - a[ this.state.sortBy ] :
            a[ this.state.sortBy ] - b[ this.state.sortBy ];
        } );
        this.setState( { dataSource: this.state.dataSource.cloneWithRows( list ) } );
        return list;
      } );
  }

  _onToggleSort( sort ) {
    this.setState( {
      sortBy: sort.attr,
      descending: sort.descending
    } );
    this._onRefresh();
  }
  _onRefresh() {
    this.setState( { isRefreshing: true } );
    this.setPlayerList()
      .then( () => this.setState( { isRefreshing: false } ) )
      .done();
  }
  _onPlayerTap( player ) {
    this.props.navigator.push( {
      component: PlayerDetail,
      title: player.NAME,
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

        <View style={ styles.toggleWrap }>
          <SortToggle
            selected={ this.state.sortBy }
            onValueChange={ sort => this._onToggleSort( sort ) }>
          </SortToggle>
        </View>
        <ListView
          dataSource={ this.state.dataSource }
          renderRow={ this.renderPlayer.bind( this ) }
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
