import React from "react";
import { StyleSheet, View, ActivityIndicator, Dimensions, TouchableOpacity, Alert, Linking } from "react-native";
import { Image, Text, Button } from "react-native-elements";

export default class Result extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result: []
        }
    }



    componentDidMount() {
        fetch("https://itunes.apple.com/lookup?id=" + this.props.route.params.id)
            .then(response => response.json())
            .then(data => {

                this.setState(
                    {
                        result: data.results[0]
                    }
                );
            })
            .catch(error => console.warn(error));

    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        source={{ uri: this.state.result.artworkUrl100 }}
                        style={styles.albumCover}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    <View>
                        <Text h4 style={{ fontWeight: "bold" }}>{this.state.result.artistName}</Text>
                        <Text h5>{this.state.result.trackName}</Text>
                        <Text h5 style={{ fontWeight: "bold" }}>{this.state.result.collectionName}</Text>
                    </View>
                </View>
                <View style={styles.info}>
                    <View style={styles.flex}>
                        <Text h4 style={{ fontWeight: "bold" }}>Genre : </Text>
                        <Text h3 style={{ fontWeight: "bold" }}>{this.state.result.primaryGenreName}</Text>
                    </View>
                    <View style={styles.flex}>
                        <Text h4 style={{ fontWeight: "bold" }}>Price : </Text>
                        <Text h4 style={{ fontWeight: "bold" }}>{this.state.result.trackPrice} $</Text>
                    </View>
                    <Button title='Listening preview' onPress={ ()=> Linking.openURL(this.state.result.previewUrl) } />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "tomato",
        flexDirection: "row"
    },
    albumCover: {
        width: 100,
        height: 100,
        marginRight: 20
    },
    flex: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    }
});