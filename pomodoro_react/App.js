import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

/**
 * Class parent App
 */
export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			timerInterval: null,
			timer: 0,
			work: 20,
			wait: 10,
			title: 'Travail'
		}
	}

	componentDidMount() {
		this.setState({ timer: this.state.work })
	}

	startTimer() {
		this.setState(
			{
				timerInterval: setInterval(() => {
					this.setState({ timer: this.state.timer - 1 })
					if (this.state.timer === -1) {
						if (this.state.title == 'Travail') {
							this.setState(prevState => ({ title: 'Repos' }))
							this.setState(prevState => ({ timer: this.state.wait }))
						} else {
							this.setState(prevState => ({ title: 'Travail' }))
							this.setState(prevState => ({ timer: this.state.work }))
						}
					}
				}, 1000)
			}
		)
	}

	/**
	 * Pause timer
	 */
	stopTimer() {
		clearInterval(this.state.timerInterval)
	}

	/**
	 * Stop timer & reset it
	 */
	resetTimer() {
		clearInterval(this.state.timerInterval)
		this.setState(prevState => ({ timer: this.state.work }))
		this.setState(prevState => ({ title: 'Travail' }))
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.titleApp}>Pomodoro Timer</Text>
				<Text style={styles.title}>{this.state.title}</Text>

				<View>
					<Text style={styles.timer}>{this.state.timer}</Text>
				</View>

				<View style={styles.buttons}>
					<Button title="Start" color="#90bc11" onPress={() => this.startTimer()} />
					<Button title="Stop" color="#bc113b" onPress={() => this.stopTimer()} />
					<Button title="Reset" color="#eab616" onPress={() => this.resetTimer()} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-around',
		backgroundColor: '#ddd',
		alignItems: 'center',
	},

	titleApp: {
		fontSize: 20,
		fontWeight: 'bold',
	},

	title: {
		fontSize: 50,
		fontWeight: 'bold',
	},

	timer: {
		margin: 10,
		fontWeight: 'bold',
		fontSize: 100,
	},

	buttons: {
		flexDirection: 'row',
	},

	startButton: {
		backgroundColor: '#00aeef',
	},

	stopButton: {
		backgroundColor: '#00aeef',
	},

	resetButton: {
		backgroundColor: '#00aeef',
	}
});
