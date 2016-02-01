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
    marginTop: 65,
    paddingTop: 4,
    backgroundColor: colors.orange
  },
  rowWrapper: {
    margin: padding.s,
    marginTop: 0,
    shadowColor: "#000000",
    shadowOpacity: 0.45,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blueAlt
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
  },
  listview: {
    paddingTop: 60
  }
} );
