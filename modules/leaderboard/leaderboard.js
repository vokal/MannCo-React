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

class LeaderBoard extends Component {
  constructor() {
    super();
    this.state = {
      isRefreshing: false,
      loaded: false,
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
          loaded: true,
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
    if( !this.state.loaded )
    {
      return this.renderLoadingView();
    }

    return (
      <ScrollView
        style={ styles.scrollView }
        refreshControl={
          <RefreshControl
            refreshing={ this.state.isRefreshing }
            onRefresh={ this._onRefresh.bind( this ) }
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
  renderPlayer( player ) {
    var onPress = () => this._onPlayerTap( player );
    return (
      <TouchableHighlight onPress={ onPress }>
        <View style={ styles.rowWrapper }>
          <PlayerSlug player={ player }></PlayerSlug>
        </View>
      </TouchableHighlight> );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 65,
    paddingTop: 4,
    backgroundColor: "#ad5d34"
  },
  rowWrapper: {
    borderColor: "#F5FCFF",
    borderRadius: 1,
    borderWidth: 1,
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 6,
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#48BBEC",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  listview: {
    paddingTop: 60,
    backgroundColor: "#F5FCFF"
  },
});

module.exports = LeaderBoard;
