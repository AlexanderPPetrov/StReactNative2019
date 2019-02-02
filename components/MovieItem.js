import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class MovieItem extends React.Component {
  componentDidMount = () => {
    console.log(this.props)
  }
  render = () => <View style={styles.container}>
    <View style={styles.movieTitleContainer}>
      <Text style={styles.movieTitle}>{this.props.movie.title}</Text>
    </View>
    <View style={styles.movieYearContainer}>
      <Text style={styles.movieYear}>{this.props.movie.releaseYear}</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Button
        onPress={this.props.onRemoveMovie}
        title="-"
        color="#841584"
      />
    </View>
  </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#d6d6d6',
    },
    movieTitleContainer: {
        flex: 3
    },
    movieYearContainer: {
        flex: 2
    },
    movieYear: {
        color: '#40c987',
        fontSize: 12,
        fontWeight: 'bold'
    },
    movieTitle: {
        color: '#3b849f',
        fontSize: 14
    },
    buttonContainer: {
        flex: 1
    }
});
