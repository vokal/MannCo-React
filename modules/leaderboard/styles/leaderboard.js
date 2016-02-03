import {
  StyleSheet
} from "react-native";

import {
  colors,
  padding,
  fontSize
} from "../../_app/styles/variables";

module.exports = StyleSheet.create( {
  scrollView: {
    flex: 1,
    padding: padding.s,
    backgroundColor: colors.orange
  },
  rowWrapper: {
    marginBottom: padding.s,
    shadowColor: colors.black,
    shadowOpacity: 0.45,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  toggleWrap: {
    marginBottom: padding.m,
    marginTop: padding.xs
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  }
} );
