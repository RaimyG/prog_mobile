import React from 'react'
import { StyleSheet, View, TouchableHighlight, FlatList, Text } from 'react-native'
import { Button, ListItem } from 'react-native-elements';
import MovieFragment from './MovieFragment';

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    addMovie = (movie) => {
        this.setState(prevState => ({
            movies: [...prevState.movies, movie]
        }))
    }

    keyExtractor = (item, index) => index.toString()

    movieDetails = (movie) => {
        this.props.navigation.navigate('MovieDetails', {
            movie: movie
        })
    }

    renderItem = ({ item }) => (
        <MovieFragment movie={item} movieDetails={() => this.movieDetails(item)} />
    )

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.movies}
                    renderItem={this.renderItem}
                />

                <TouchableHighlight style={styles.addButton}>
                    <Button title='+'
                        titleStyle={{
                            color: "white",
                            fontSize: 30,
                        }}
                        onPress={() => this.props.navigation.navigate('AddMovie', {
                            addMovie: movie => this.addMovie(movie)
                        })}
                        buttonStyle={styles.button} />
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButton: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 100,
    }
})
