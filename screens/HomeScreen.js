import React from 'react';
import {
    Text,
    View, StyleSheet, FlatList
} from 'react-native';

import MovieItem from '../components/MovieItem';
import Layout from '../components/layout/Layout';
import Card from '../components/Card';
import colors from '../constants/Colors';
import axios from 'axios';


export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            movies: []
        }
    }

    componentDidMount = () => {
        this.loadMovies();
    }

    render = () =>
        <Layout title="Начало">
            <View style={styles.homeContent}>
                <Text style={styles.headerSecondary}>React Native</Text>
                <Text style={styles.headerPrimary}>Software Technologies 2019</Text>
            </View>
            <Card>
                {this.listMovies()}
            </Card>
        </Layout>

    listMovies = () => {
        if (this.state.isLoading) {
            return <Text style={styles.helloText}>Movies are loading</Text>
        }
        return <FlatList
            data={this.state.movies}
            renderItem={({item: movie}) => <MovieItem
                movie={movie}
                onRemoveMovie={this.onRemoveMovie}
            />}
            keyExtractor={({id}, index) => id}
        />


    }
    onRemoveMovie = (movie) => {
        const movies = this.state.movies.filter(
            m => m.id !== movie.id);

        this.setState({
            movies
        });
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
        .catch((error) => {
            console.error(error);
        });
    }
}

const styles = StyleSheet.create({
    homeContent: {
        paddingVertical: 45,

    },
    headerSecondary: {
        fontSize: 18,
        color: colors.textSecondary
    },
    headerPrimary: {
        fontSize: 20,
        color: colors.textPrimary
    },
});
