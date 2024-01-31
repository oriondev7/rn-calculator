import React, { FC, useContext } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { ThemeContext } from '../../context/ThemeContext'
import { styles } from './button.styles'
import { ThemeMode } from '../../constants'
import { ButtonProps } from './button.types'

export const Button: FC<ButtonProps> = ({ title, onPress, isBlue, isGray }) => {
  const theme = useContext(ThemeContext)
  const isThemeLight = theme === ThemeMode.light

  return (
    <TouchableOpacity
      style={
        isBlue
          ? styles.btnBlue
          : isGray
          ? styles.btnGray
          : isThemeLight
          ? styles.btnLight
          : styles.btnDark
      }
      onPress={onPress}
    >
      <Text
        style={
          isBlue || isGray
            ? styles.smallTextLight
            : isThemeLight
            ? styles.smallTextDark
            : styles.smallTextLight
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}
