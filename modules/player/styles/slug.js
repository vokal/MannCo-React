import {
  StyleSheet
} from "react-native";

import {
  colors,
  padding,
  fontSize
} from "../../_app/styles/variables";

module.exports = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: "row",
    height: 75
  },
  thumbnail: {
    width: 75,
    height: 75
  },
  detailContainer: {
    flex: 1,
    justifyContent: "center",
    padding: padding.m
  },
  rightContainer: {
    alignItems: "center",
    height: 75,
    justifyContent: "center",
    width: 50
  },
  position: {
    fontSize: fontSize.xl,
    textAlign: "center"
  },
  playerName: {
    color: colors.darkBg,
    fontSize: fontSize.l,
    marginBottom: padding.xs
  },
  playerDetails: {
    flexDirection: "row"
  },
  playerKills: {
    color: colors.lightContrast,
    flex: 1,
    fontSize: fontSize.s
  }
});
