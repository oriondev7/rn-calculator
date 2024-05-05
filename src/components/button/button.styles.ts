import { StyleSheet } from 'react-native'
import { Color, Size, Arrangement } from '../../constants'

export const styles = StyleSheet.create({
  btnBlue: {
    width: Size.btnWidht,
    height: Size.btnHeight,
    borderRadius: Size.btnBorderRadius,
    backgroundColor: Color.blue,
    justifyContent: Arrangement.center,
    alignItems: Arrangement.center,
    margin: Size.btnMargin,
  },

  btnDark: {
    width: Size.btnWidht,
    height: Size.btnHeight,
    borderRadius: Size.btnBorderRadius,
    backgroundColor: Color.btnDark,
    justifyContent: Arrangement.center,
    alignItems: Arrangement.center,
    margin: Size.btnMargin,
  },

  btnLight: {
    width: Size.btnWidht,
    height: Size.btnHeight,
    borderRadius: Size.btnBorderRadius,
    backgroundColor: Color.white,
    justifyContent: Arrangement.center,
    alignItems: Arrangement.center,
    margin: Size.btnMargin,
  },

  btnGray: {
    width: Size.btnWidht,
    height: Size.btnHeight,
    borderRadius: Size.btnBorderRadius,
    backgroundColor: Color.btnGray,
    justifyContent: Arrangement.center,
    alignItems: Arrangement.center,
    margin: Size.btnMargin,
  },

  smallTextLight: {
    fontSize: Size.btnFontSize,
    color: Color.white,
  },

  smallTextDark: {
    fontSize: Size.btnFontSize,
    color: Color.black,
  },
})
