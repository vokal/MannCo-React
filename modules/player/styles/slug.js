import {
  StyleSheet
} from "react-native";

import {
  colors,
  padding,
  fontSize
} from "../../_app/styles/variables";

var slugHeight = 75;
module.exports = StyleSheet.create({

  container: {
    backgroundColor: colors.white,
    height: slugHeight
  },
  thumbnail: {
    width: slugHeight,
    height: slugHeight,
    marginRight: padding.s,
  },
  position: {
    height: slugHeight,
    width: 50
  },
  positionText: {
    fontSize: fontSize.xl,
    textAlign: "center"
  },
  playerName: {
    color: colors.darkBg,
    fontSize: fontSize.l,
    marginBottom: padding.xs
  },
  playerKills: {
    color: colors.lightContrast,
    flex: 1,
    fontSize: fontSize.s
  }
});
