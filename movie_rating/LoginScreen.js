import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native'
import { Button } from 'react-native-elements';


export default class LoginScreen extends React.Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>INSEREZ IMAGE ICI</Text>
                </View>
                <View style={styles.formContainer}>
                    <TextInput placeholder="Pseudo" style={styles.input} />
                    <TextInput placeholder="Mot de passe" secureTextEntry={true} style={styles.input} />
                    <TouchableHighlight style={styles.button}>
                        <Button buttonStyle={styles.button} title="Connexion" onPress={() => this.props.navigation.navigate('Home')}></Button>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#30475e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        flex: 0.6,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#ececec'
    },
    input: {
        backgroundColor: '#ececec',
        borderRadius: 10,
        width: 200,
        padding: 10,
        margin: 20,
    },
    button: {
        borderRadius: 10,
        backgroundColor: "#f2a365",
    },
});
