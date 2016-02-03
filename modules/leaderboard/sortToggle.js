"use strict";

import React, {
  Component,
  Text,
  View,
  TouchableOpacity
} from "react-native";

import sortMap from "./values/sortMap";
import flex from "../_app/styles/flex";
import styles from "./styles/toggle";

class SortToggle extends Component {
  constructor() {
    super();
    this.state = { selected: "" };
  }
  componentDidMount() {
    this.setState( { selected: this.props.selected } );
  }
  _select( sort ) {
    if( this.state.selected !== sort.attr && typeof this.props.onValueChange === "function" )
    {
      this.props.onValueChange( sort );
    }
    this.setState( { selected: sort.attr } );
  }

  render() {
    return (
      <View style={ [ flex.row, styles.wrap ] }>
      {
        sortMap
          .map( ( sort, i ) => {
            let isSelected = this.state.selected === sort.attr;
            return (
              <TouchableOpacity
                style={ styles.toggle }
                onPress={ () => this._select( sort ) }
                key={ i }>
                <Text style={ [ styles.label, isSelected ? styles.selected : {} ] }>
                  { sort.label }
                </Text>
              </TouchableOpacity>
            );
          } )
      }
      </View>
    );
  }
};

module.exports = SortToggle;
