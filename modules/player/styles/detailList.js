import {
  StyleSheet
} from "react-native";

import {
  colors,
  padding,
  fontSize
} from "../../_app/styles/variables";

module.exports = StyleSheet.create( {
  row: {
    height: 75
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    height: 75 + padding.s,
    marginBottom: padding.s,
    paddingBottom: padding.s
  },
  thumbnail: {
    height: 75,
    marginRight: padding.s,
    width: 75
  },
  toggleRow: {
    marginTop: padding.s,
    padding: padding.s
  },
  toggleText: {
    color: colors.blueAlt,
    fontWeight: "bold",
    textAlign: "center"
  },
  class: {
    fontSize: fontSize.m,
    fontWeight: "bold"
  }
} );
