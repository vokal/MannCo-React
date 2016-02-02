"use strict";

import React, {
  Component,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";

import weaponMap from "./values/weaponMap";

import flex from "../_app/styles/flex";
import list from "./styles/detailList";
import styles from "./styles/detail";


class PlayerWeaponList extends Component {
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
          weaponMap
            .sort( ( a, b ) =>  player[ b.killsAttr ] - player[ a.killsAttr ] )
            .map( ( weapon, i ) => this.renderWeapon( weapon, i ) )
        }
        <TouchableOpacity style={ list.toggleRow } onPress={ () => this._toggleViewAll() } >
          <Text style={ list.toggleText }>
            { this.state.showAll ? "Show Less" : "Show More" }
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  renderWeapon( weapon, i ) {
    var player = this.props.player;
    if( ( !this.state.showAll && i > 2 ) || player[ weapon.killsAttr ] === 0 )
    {
      return;
    }

    return (
      <View style={ [ flex.row, list.row, list.divider ] } key={ i }>
        <View style={ [ list.thumbnail, list.thumbnailWrapper ] }>
          <Image
            source={ weapon.img }
            style={ list.icon }
            />
        </View>
        <View style={ [ flex.one, flex.center ] }>
          <Text style={ list.class }>{ weapon.name }</Text>
          <Text style={ [ flex.one, styles.text ] }>{ player[ weapon.killsAttr ] } kills</Text>
        </View>
      </View>
    );
  }
};

module.exports = PlayerWeaponList;
