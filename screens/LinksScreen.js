import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <Text style={styles.container}>
        TEXT LINKS SCREEN
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009900',
  },
});
