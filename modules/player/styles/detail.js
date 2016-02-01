import {
  StyleSheet
} from "react-native";

import {
  colors,
  padding
} from "../../_app/styles/variables";

module.exports = StyleSheet.create( {
  container: {
    flex: 1,
    padding: padding.s
  },
  card: {
    backgroundColor: colors.white,
    flexDirection: "row",
    marginBottom: padding.s,
    padding: padding.s
  },
  thumbnail: {
    height: 150,
    marginRight: padding.m,
    width: 150
  },
  playerDetail: {
    flex: 1
  },
  text: {
    marginBottom: padding.s
  }
} );
