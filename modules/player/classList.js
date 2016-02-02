"use strict";

import React, {
  Component,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";

import classMap from "./values/classMap";

import flex from "../_app/styles/flex";
import list from "./styles/detailList";
import styles from "./styles/detail";


class PlayerClassList extends Component {
  constructor() {
    super();
    this.state = {
      showAll: false
    };
  }
  _toggleViewAll() {
    this.setState( {
      showAll: !this.state.showAll
    } );
  }
  render() {
    var player = this.props.player;

    return (
      <View style={ flex.one }>
        {
          classMap
            .sort( ( a, b ) =>  player[ b.killsAttr ] - player[ a.killsAttr ] )
            .map( ( cls, i ) => this.renderClass( cls, i ) )
        }
        <TouchableOpacity style={ list.toggleRow } onPress={ () => this._toggleViewAll() } >
          <Text style={ list.toggleText }>
            { this.state.showAll ? "Show Less" : "Show More" }
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  renderClass( cls, i ) {
    var player = this.props.player;
    if( ( !this.state.showAll && i > 2 ) || player[ cls.killsAttr ] === 0  )
    {
      return;
    }

    return (
      <View style={ [ flex.row, list.row, list.divider ] } key={ i }>
        <Image
          source={ cls.img }
          style={ list.thumbnail }
          />
        <View style={ [ flex.one, flex.center ] }>
          <Text style={ list.class }>{ cls.name }</Text>
          <View style={ flex.row }>
            <Text style={ [ flex.one, styles.text ] }>{ player[ cls.killsAttr ] } kills</Text>
            <Text style={ [ flex.one, styles.text ] }>{ player[ cls.deathsAttr ] } deaths</Text>
            <Text style={ [ flex.one, styles.text ] }>
              { ( player[ cls.killsAttr ] / player[ cls.deathsAttr ] || 1 ).toFixed( 2 ) } k/d
            </Text>
          </View>
        </View>
      </View>
    );
  }
};

module.exports = PlayerClassList;
