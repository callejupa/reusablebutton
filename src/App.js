import React from 'react'
import { Alert, View } from 'react-native'
import Button from './components/Button'
import { styles } from './style'

class App extends React.Component {

  handleButtonPress(){
    Alert.alert('Alert', 'You Clicked this button!')
  }

  render(){
    return (
      <View style={styles.container}>
        <Button style={styles.btn}>
          Simple button
        </Button>
        <Button success style={styles.btn}>
          Success button
        </Button>
        <Button info style={styles.btn}>
          Info button
        </Button>
        <Button danger rounded 
          style={styles.btn}
          onPress={this.handleButtonPress}>
          Rounded button
        </Button>
      </View>
    )
  }
}

export default App