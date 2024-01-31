import { createContext } from 'react'
import { ThemeMode } from '../constants'

export const ThemeContext = createContext(ThemeMode.light)
