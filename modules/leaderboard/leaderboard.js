"use strict";

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  RefreshControl
} from "react-native";
import PlayerSlug from "../player/listSlug";
var Player = require( "../player/services/player" );

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

  render() {
    if( !this.state.loaded )
    {
      return this.renderLoadingView();
    }
    // necessary because 'this' is otherwise undefined in _onRefresh
    var onRefreshHelper = () => this._onRefresh.apply( this );

    return (
      <ScrollView
        style={ styles.scrollView }
        refreshControl={
          <RefreshControl
            refreshing={ this.state.isRefreshing }
            onRefresh={ onRefreshHelper }
            tintColor="#ff0000"
            title="Loading..."
            colors={ [ "#ff0000", "#00ff00", "#0000ff" ] }
            progressBackgroundColor="#ffff00"
          />
        }>
        <ListView
          dataSource={ this.state.dataSource }
          renderRow={ this.renderPlayer }
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
    return ( <PlayerSlug player={player}></PlayerSlug> );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 65
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
