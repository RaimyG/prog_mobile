import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import { AirbnbRating } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class MovieFragment extends React.Component {

    constructor(props) {
        super(props)
    }

    // https://stackoverflow.com/questions/39037705/how-to-use-onpress-on-a-custom-component
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.movieDetails(this.props.movie)}>
                    <View>
                        <Text style={styles.title}>{this.props.movie.name}</Text>
                        {
                            this.props.movie.resume != '' &&
                            <Text style={styles.resume}>{this.props.movie.resume}</Text>
                        }
                        <AirbnbRating defaultRating={this.props.movie.rating} size={25} showRating={false} isDisabled={true} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#aaa',
        padding: 15,
        borderRadius: 20,
        margin: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    resume: {
        fontStyle: 'italic',
        marginTop: 5,
        marginBottom: 10,
    },
    rating: {
        fontWeight: 'bold'
    }
})
