import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The game is over!</Text>
      <Text>I guessed {props.userChoice}!</Text>
      <Text>It took me {props.rounds} rounds to guess.</Text>
      <View style={styles.button}>
        <Button title='Play again!' onPress={props.onRestart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    marginTop: 20
  }
});
export default GameOverScreen;