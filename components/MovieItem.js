import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ListItem from './ListItem';
import colors from '../constants/Colors';

export default class MovieItem extends React.Component {
  componentDidMount = () => {
    console.log(this.props)
  }
  render = () => <ListItem>
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
        color={colors.buttonPrimary}
      />
    </View>
  </ListItem>

}

const styles = StyleSheet.create({

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
        color: colors.textSecondary,
        fontSize: 12,
    },
    movieTitle: {
        color: colors.textPrimary,
        fontSize: 14,
        fontWeight: 'bold'
    },
    buttonContainer: {
        flex: 1
    }
});
