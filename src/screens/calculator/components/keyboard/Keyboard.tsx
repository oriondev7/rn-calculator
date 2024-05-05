import * as React from 'react'
import { Button } from './components'
import { View, Text } from 'react-native'
import { styles } from './keyboard.styles'
import { Color, Operation } from '../../../../constants'

export const Keyboard = () => {
  const [lhs, setLHS] = React.useState('')
  const [rhs, setRHS] = React.useState('')
  const [operation, setOperation] = React.useState('')
  const [result, setResult] = React.useState<number | null>(null)

  const onPressNumber = (number: string) => {
    if (lhs.length < 10) {
      setLHS(lhs + number)
    }
  }

  const onPressOperation = (operation: string) => {
    setOperation(operation)
    setRHS(lhs)
    setLHS('')
  }

  const clear = () => {
    setLHS('')
    setRHS('')
    setOperation('')
    setResult(null)
  }

  const getResult = () => {
    switch (operation) {
      case Operation.add:
        clear()
        setResult(parseInt(rhs) + parseInt(lhs))
        break
      case Operation.subtract:
        clear()
        setResult(parseInt(rhs) - parseInt(lhs))
        break
      case Operation.multiply:
        clear()
        setResult(parseInt(rhs) * parseInt(lhs))
        break
      case Operation.divide:
        clear()
        setResult(parseInt(rhs) / parseInt(lhs))
        break
      default:
        clear()
        setResult(0)
    }
  }

  const displayLHS = () => {
    if (result !== null) {
      return (
        <Text
          style={
            result < 9999
              ? [styles.lhs, { color: Color.result }]
              : [styles.lhs, { color: Color.result, fontSize: 50 }]
          }
        >
          {result?.toString()}
        </Text>
      )
    }

    if (lhs && lhs.length < 6) {
      return <Text style={styles.lhs}>{lhs}</Text>
    }

    if (lhs === '') {
      return <Text style={styles.lhs}>{'0'}</Text>
    }

    if (lhs.length > 5 && lhs.length < 8) {
      return <Text style={[styles.lhs, { fontSize: 70 }]}>{lhs}</Text>
    }

    if (lhs.length > 7) {
      return <Text style={[styles.lhs, { fontSize: 50 }]}>{lhs}</Text>
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.operationContainer}>
        <Text style={styles.rhs}>
          {rhs}
          <Text style={styles.operation}>{operation}</Text>
        </Text>
        {displayLHS()}
      </View>

      <View style={styles.row}>
        <Button title="C" onPress={clear} isGray />
        <Button title="+/-" onPress={() => onPressOperation('+/-')} isGray />
        <Button title="%" onPress={() => onPressOperation('%')} isGray />
        <Button
          title="÷"
          onPress={() => onPressOperation(Operation.divide)}
          isBlue
        />
      </View>

      <View style={styles.row}>
        <Button title="7" onPress={() => onPressNumber('7')} />
        <Button title="8" onPress={() => onPressNumber('8')} />
        <Button title="9" onPress={() => onPressNumber('9')} />
        <Button
          title="x"
          onPress={() => onPressOperation(Operation.multiply)}
          isBlue
        />
      </View>

      <View style={styles.row}>
        <Button title="4" onPress={() => onPressNumber('4')} />
        <Button title="5" onPress={() => onPressNumber('5')} />
        <Button title="6" onPress={() => onPressNumber('6')} />
        <Button
          title="-"
          onPress={() => onPressOperation(Operation.subtract)}
          isBlue
        />
      </View>

      <View style={styles.row}>
        <Button title="1" onPress={() => onPressNumber('1')} />
        <Button title="2" onPress={() => onPressNumber('2')} />
        <Button title="3" onPress={() => onPressNumber('3')} />
        <Button
          title="+"
          onPress={() => onPressOperation(Operation.add)}
          isBlue
        />
      </View>

      <View style={styles.row}>
        <Button title="." onPress={() => onPressNumber('.')} />
        <Button title="0" onPress={() => onPressNumber('0')} />
        <Button title="⌫" onPress={() => setLHS(lhs.slice(0, -1))} />
        <Button title="=" onPress={getResult} isBlue />
      </View>
    </View>
  )
}
