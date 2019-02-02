import React from 'react';
import {
  Button,
  ScrollView,
  Text,
  View, StyleSheet, ListView, FlatList
} from 'react-native';
import MovieItem from '../components/MovieItem';

export default class HomeScreen extends React.Component {

    constructor(props){
        super(props);

        this.state ={
          isLoading: true,
          movies:[]
        }
    }

    componentDidMount = () => {
      this.loadMovies();
    }

    render = () =>
        <View style={styles.container}>
          <Text style={styles.helloText}>Text</Text>

            {this.listMovies()}

        </View>

    listMovies = () => {
      if(this.state.isLoading){
        return <Text style={styles.helloText}>Movies are loading</Text>
      }
      return  <FlatList
          data={this.state.movies}
          renderItem={({item: movie}) => <MovieItem
              movie={movie}
              onRemoveMovie={this.onRemoveMovie}
          />}
          keyExtractor={({id}, index) => id}
      />



    }
    onRemoveMovie = (movie) => {
        console.log('remove movie')
    }
    loadMovies = () => {
        fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {

            this.setState({
                isLoading: false,
                movies: responseJson.movies,
            });

        })
        .catch((error) =>{
            console.error(error);
        });
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
    helloText: {
    color: 'rgba(96,100,109, 0.8)',
  },

});
