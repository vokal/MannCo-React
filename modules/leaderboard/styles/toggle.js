import {
  StyleSheet
} from "react-native";

import {
  colors,
  padding,
  fontSize
} from "../../_app/styles/variables";

module.exports = StyleSheet.create( {
  wrap: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  toggle: {
    marginLeft: padding.xs,
    marginRight: padding.xs,
    padding: padding.s,
    paddingLeft: padding.m,
    paddingRight: padding.m
  },
  label: {
    color: colors.white,
    fontSize: fontSize.l
  },
  selected: {
    color: colors.black
  }
} );
