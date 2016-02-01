import {
  StyleSheet
} from "react-native";

import {
  colors,
  padding,
  fontSize
} from "../../_app/styles/variables";

module.exports = StyleSheet.create( {
  scroll: {
    padding: padding.s
  },
  card: {
    backgroundColor: colors.white,
    flex: 1,
    marginBottom: padding.s,
    padding: padding.s
  },
  thumbnail: {
    height: 150,
    marginRight: padding.s,
    width: 150
  },
  heading: {
    marginBottom: padding.s,
    marginTop: padding.m
  },
  headingText: {
    color: colors.white,
    fontSize: fontSize.l,
    fontWeight: "bold"
  },
  text: {
    lineHeight: fontSize.l + 2
  }
} );
