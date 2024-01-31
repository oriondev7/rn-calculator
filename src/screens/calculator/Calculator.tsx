import { useState } from 'react'
import { Switch, SafeAreaView, View, Text } from 'react-native'
import { ThemeMode } from '../../constants'
import { styles } from './calculator.styles'
import { ThemeContext } from '../../context/ThemeContext'
import { Keyboard } from '../../components'

export const Calculator = () => {
  const [theme, setTheme] = useState(ThemeMode.light)
  const isThemeLight = theme === ThemeMode.light

  const toggleThemeMode = () => {
    setTheme(isThemeLight ? ThemeMode.dark : ThemeMode.light)
  }

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={isThemeLight ? styles.lightContainer : styles.darkContainer}
      >
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{ color: isThemeLight ? 'black' : 'white', fontSize: 20 }}
          >
            Toggle Theme Color
          </Text>
          <Switch value={isThemeLight} onValueChange={toggleThemeMode} />
        </View>
        <Keyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  )
}
