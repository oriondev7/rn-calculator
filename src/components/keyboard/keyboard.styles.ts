import {StyleSheet} from 'react-native';
import {Color, Size, Arrangement} from '../../constants';

export const styles = StyleSheet.create({
  row: {
    maxWidth: '100%',
    flexDirection: Arrangement.row,
  },

  container: {
    position: Arrangement.absolute,
    bottom: Size.kbBottom,
  },

  operationContainer: {
    height: Size.kbHeight,
    width: '90%',
    justifyContent: Arrangement.flexEnd,
    alignSelf: Arrangement.center,
  },

  operation: {
    color: Color.purple,
    fontSize: Size.kbOperationFontSize,
    fontWeight: '500',
  },

  lhs: {
    fontSize: Size.kbBigFontSize,
    color: Color.gray,
    fontWeight: '200',
    alignSelf: Arrangement.flexEnd,
  },

  rhs: {
    fontSize: Size.kbSmallFontSize,
    color: Color.gray,
    fontWeight: '200',
    alignSelf: Arrangement.flexEnd,
  },
});
