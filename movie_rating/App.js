import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import AddMovie from './AddMovie'
import MovieDetails from './MovieDetails'

const Stack = createStackNavigator();

export default class App extends React.Component {
	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator screenOptions={{
					headerStyle: {
						backgroundColor: '#222831',
					},
					headerTintColor: '#fff',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}>
					<Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Connexion' }} />
					<Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Liste de mes films', headerLeft: null }}/>
					<Stack.Screen name="AddMovie" component={AddMovie} options={{ title: 'Ajouter un film' }}/>
					<Stack.Screen name="MovieDetails" component={MovieDetails} options={{ title: 'Test' }}/>
				</Stack.Navigator>
			</NavigationContainer>
		)
	}
}
