import { StyleSheet } from 'react-native'
import { Arrangement, Color } from '../../constants'

export const styles = StyleSheet.create({
  darkContainer: {
    flex: 1,
    alignItems: Arrangement.center,
    justifyContent: Arrangement.flexStart,
    backgroundColor: Color.black,
  },

  lightContainer: {
    flex: 1,
    alignItems: Arrangement.center,
    justifyContent: Arrangement.flexStart,
    backgroundColor: Color.light,
  },
})
