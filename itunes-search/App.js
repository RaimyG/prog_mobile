import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './Search';
import Result from './Result';

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Search" component={Search} />
				<Stack.Screen name="Result" component={Result} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const Stack = createStackNavigator();
