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
        onPress={ () => {
            this.props.onRemoveMovie(this.props.movie);
        } }
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
        marginHorizontal: 10,
        marginVertical: 3,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#d6d6d6'
    },
    movieTitleContainer: {
        flex: 3,
        marginLeft: 10,
        justifyContent: 'center'
    },
    movieYearContainer: {
        flex: 2,
        justifyContent: 'center'
    },
    movieYear: {
        color: '#2e5da7',
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
