//-------------------------------
// App Dependencies 
//-------------------------------

	import React, { Component } from 'react';
	import { Text } from 'react-native';
	import firebase from 'firebase';
	import { Button, Card, CardSection, Input } from './common';

//-------------------------------
// LoginForm Component
//-------------------------------

	class LoginForm extends Component {
		//State
		state = {
			email: '',
			password: '',
			error: ''
		}

		//Life cycle methods
		componentWillMount() {}

		componentDidMount() {}

		componentWillReceiveProps(nextProps) {}

		componentWillUpdate(nextProps, nextState) {}

		componentDidUpdate(prevProps, prevState) {}

		// Methods
		onButtonPress() {
			const { email, password } = this.state;

			this.setState({ error: ''});

			firebase.auth().signInWithEmailAndPassword(email, password)
				.catch(() => {
					firebase.auth().createUserWithEmailAndPassword(email, password)
						.catch(() => {
							this.setState({ error: 'Authentication Failed.' })
						})
				})
		}		

		// Render methods
		render() {
			return (
				<Card>
					<CardSection>
						<Input
							label={'Email'}
							placeholder={'user@gmail.com'}
							value={this.state.email}
							onChangeText={email => this.setState({ email })}
						/>
					</CardSection>
					<CardSection>
						<Input
							secureTextEntry
							label={'Password'}
							placeholder={'password'}
							value={this.state.password}
							onChangeText={password => this.setState({ password })}
						/>
					</CardSection>
					<Text style={styles.errorTextStyle}>
						{this.state.error}
					</Text>
					<CardSection>
						<Button onPress={this.onButtonPress.bind(this)}>
							Log in
						</Button>
					</CardSection>
				</Card>
			);
		}					
	}

	const styles = {
		errorTextStyle: {
			fontSize: 20,
			alignSelf: 'center',
			color: 'red'
		}
	}

//-------------------------------
// Export Component
//-------------------------------

	export default LoginForm;
